import { Box, Button, CardMedia, CircularProgress, Container, Modal, Typography } from "@mui/material";
import { getAllPokemons, saveAllPokemons } from "./controllers/pokemons.controller";
import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import { fightPokemons, saveFight } from "./controllers/fights.controller";
import { Fight } from "./interfaces/fight";
import { Pokemon } from "./interfaces/pokemon";
import PokemonLogo from "./assets/pokemonLogo.png"
import Pokeball from "./assets/pokeball.png"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | undefined>();
  const [defender, setDefender] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(false);
  const [winner, setWinner] = useState<Pokemon>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loadingFight, setLoadingFigth] = useState<boolean>(false);

  const getPokemons = () => {
    saveAllPokemons().then(async () => {
      const allPokemons = await getAllPokemons();
      setPokemon(allPokemons);
    })
  }
  useEffect(() => {
    getPokemons()
  }, [])

  const choosePokemon = async (e: Pokemon) => {
    setSelected(e.id);
    const chosenPokemon = pokemon.filter(p => p.id === e.id)
    setChosenPokemon(chosenPokemon[0])
    const defenderPokemon = await selectRandomPokemon(e.id)
    setDefender(defenderPokemon);
  }

  function selectRandomPokemon(excludePokemonId: string): Promise<Pokemon> {
    setLoading(true);
    return new Promise((resolve) => {
      const filteredPokemons: Pokemon[] = pokemon.filter(
        (pokemon) => pokemon.id !== excludePokemonId
      );
      const randomIndex: number = Math.floor(Math.random() * filteredPokemons.length);
      const selectedPokemon: Pokemon = filteredPokemons[randomIndex];

      setTimeout(() => {
        resolve(selectedPokemon);
        setLoading(false);
      }, 3000);
    });
  }

  const startFight = async () => {
    return new Promise((resolve) => {
      setLoadingFigth(true);
      setTimeout(() => {
        resolve(fightPokemons([chosenPokemon, defender]).then(async (res) => {
          setWinner(res);
          setShowModal(true);
          const dataFight: Fight = {
            firstPokemonId: chosenPokemon.id,
            firstPokemonName: chosenPokemon.name,
            secondPokemonId: defender.id,
            secondPokemonName: defender.name,
            winnerId: res.id,
            winnerName: res.name
          }
          await saveFight(dataFight)
        }))
        setLoadingFigth(false)
        setDefender({});
        setChosenPokemon({});
        setSelected('');
      }, 3000);
    })
  }
  const handleClose = () => setShowModal(false);
  return (
    <Container fixed>
      <Box display="flex" flexDirection="column" alignContent="center" alignItems="center" gap={2} >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography fontSize={70}>Battle of</Typography>
            <CardMedia
              component="img"
              image={PokemonLogo}
              sx={{ width: 'auto'}}
            />
          </Box>
          {!selected ? 
          <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
            <CardMedia
              component="img"
              image={Pokeball}
              sx={{ width: '5%', objectFit: 'contain' }}
            />
            <Typography fontSize={30}>Select your pokemon!</Typography>
            <CardMedia
              component="img"
              image={Pokeball}
              sx={{ width: '5%', objectFit: 'contain' }}
            />
          </Box>
          : null}
        </Box>
        {!selected ?
          <Box display="flex" justifyContent="space-between" gap={2} mt={10}>
            {pokemon && pokemon.map((e) =>
              <Cards pokemon={e} showStats={false} choosePokemon={choosePokemon} selected={selected} />
            )}
          </Box>
          : null}
        {selected ?
          <Box display="flex" justifyContent="space-between" mt={5} gap={2}>
            <Box >
              {chosenPokemon?.id && <Cards pokemon={chosenPokemon} showStats={true} choosePokemon={choosePokemon} selected={selected} />}
            </Box>
            {loadingFight ? <Box alignContent={'center'} ><CircularProgress /></Box> : <Box alignContent={'center'}><Button disabled={loading} sx={{ height: '40px' }} variant="contained" onClick={startFight}>Fight!</Button></Box>}
            {loading ?
              <Box alignContent={'center'}>
                <CircularProgress />
              </Box> : (defender?.id ? <Cards pokemon={defender} showStats={true} choosePokemon={choosePokemon} selected={defender.id} /> : <Typography>Pokemon</Typography>)}
          </Box>
          : null}
        <Modal
          keepMounted
          open={showModal}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <CardMedia
              component="img"
              sx={{ width: '100%', objectFit: 'contain' }}
              image={winner?.imageUrl} />
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2" fontSize={35}>
              {winner?.name + " wins!"}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Container>)
}