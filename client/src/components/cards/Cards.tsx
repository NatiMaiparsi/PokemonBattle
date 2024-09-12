import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, LinearProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export interface PropsCards {
    pokemon: any,
    showStats: boolean,
    // eslint-disable-next-line @typescript-eslint/ban-types
    choosePokemon?: Function,
    selected?: string
}

export default function Cards({pokemon, showStats, choosePokemon, selected }:any) {
    return (
        <Card onClick={() => !showStats && choosePokemon(pokemon)} sx={{border: `${selected === pokemon.id ? '2px solid gray' : 'none'
        }`,
        boxShadow: `${selected === pokemon.id && !showStats ? '5px 5px 5px gray' : 'none'}`,
        borderRadius: '12px',
        cursor: `${!showStats ? 'pointer': 'default'}`,
        '&:hover': {
          transform: `${!showStats ? 'scale(1.05)' : 'none'}`, 
        } 
        }}
        >
            <CardMedia
            component="img"
            sx={{ width: '100%', objectFit: 'contain' }}
            image={pokemon.imageUrl}/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>
            {showStats && <>
            <Box display="flex" alignItems="center" mb={1}>
              <FavoriteIcon color="error" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ width: '80px' }}>HP</Typography>
              <LinearProgress
                variant="determinate"
                value={pokemon.hp * 15}
                sx={{ flexGrow: 1, ml: 2, height: 10, borderRadius: '5px' }}
                color="success"
              />
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <FlashOnIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ width: '80px' }}>Attack</Typography>
              <LinearProgress
                variant="determinate"
                value={pokemon.attack * 15}
                sx={{ flexGrow: 1, ml: 2, height: 10, borderRadius: '5px' }}
                color="primary"
              />
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <SecurityIcon color="secondary" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ width: '80px' }}>Defense</Typography>
              <LinearProgress
                variant="determinate"
                value={pokemon.defense * 15}
                sx={{ flexGrow: 1, ml: 2, height: 10, borderRadius: '5px' }}
                color="secondary"
              />
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <DirectionsRunIcon color="warning" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ width: '80px' }}>Speed</Typography>
              <LinearProgress
                variant="determinate"
                value={pokemon.speed * 15}
                sx={{ flexGrow: 1, ml: 2, height: 10, borderRadius: '5px' }}
                color="warning"
              />
            </Box></>}
          </CardContent>
        </Card>
    ) 
}