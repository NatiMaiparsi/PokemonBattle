import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, LinearProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function ShortCard({pokemon}:any) {
    return (
        <Card>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>

            {/* HP */}
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

            {/* Attack */}
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

            {/* Defense */}
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

            {/* Speed */}
            <Box display="flex" alignItems="center" mb={1}>
              <DirectionsRunIcon color="warning" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ width: '80px' }}>Speed</Typography>
              <LinearProgress
                variant="determinate"
                value={pokemon.speed * 15}
                sx={{ flexGrow: 1, ml: 2, height: 10, borderRadius: '5px' }}
                color="warning"
              />
            </Box>
          </CardContent>
        </Card>
    ) 
}