import { Avatar, Badge, Box, Button, IconButton, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/navbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Guideimage from '../assets/images/binoMan.png';
import LiveImage from '../assets/images/live.png';
import cloud from '../assets/images/rain-png-34472.png';



const MainGrid_1 = () => {
  return (
    <Grid container spacing={2} sx={{ m: '5%' ,px:'5%'}} >
    <Grid size={6} sx={{ p: 5, fontFamily: 'Manrope' }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, md: 50 },
          fontWeight: '800',
          color: 'text.primary',
          textAlign: 'left',
          my: 2,
        }}
      >
        People don't <br />
        take trips, trips
        <br />
        take people
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 10, md: 15 },
          fontWeight: '600',
          color: 'text.primary',
          textAlign: 'left',
          my: 4,
        }}
      >
        To get the best of your adventure you just
        <br /> need to leave and go where you like. We are
        <br /> waiting for you! <br />
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: { xs: 2, md: 4 } }} />}
          sx={{
            mr: { sm: 1, md: 2 },
            backgroundColor: 'primary.main',
            color: 'text.secondary',
            fontSize: { xs: 10, md: 15 },
            fontWeight: '600',
            borderRadius: '12px',
            padding: { xs: 1, md: 2 },
            textTransform: 'none',
            width: { xs: 100, md: 150 },
            height: { xs: 30, md: 55 },
          }}
        >
          Plan a trip
        </Button>

        <Box
          sx={{
            width: { sm: 18, md: 48, lg: 68 },
            height: { sm: 18, md: 48, lg: 68 },
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(43, 248, 255, 1) 0%, rgba(237, 83, 104, 1) 100%)',
            position: 'relative',
          }}
        >
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/14504994/pexels-photo-14504994.jpeg"
            sx={{
              width: { sm: 10, md: 40, lg: 60 },
              height: { sm: 10, md: 40, lg: 60 },
              border: { lg: '3px solid white' },
            }}
          />
          <IconButton
            sx={{
              backgroundColor: 'white',
              zIndex: 2,
              position: 'absolute',
              right: '-18%',
              boxShadow: '0px 4px 20px rgba(17, 12, 46, 0.2)',
              transition: 'all 0.3s ease-in-out',
            
              
              '&:hover': {backgroundColor:'primary.main', color:'white',animation:'bounce 1s ease-in-out forwards'},
            }}
            size="small"
          >
            <PlayArrowIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 11, md: 16 },
            fontWeight: '700',
            color: 'text.primary',
            textAlign: 'left',
            ml: 2,
            py: 2,
          }}
        >
          Watch our <br />
          story
        </Typography>
      </Box>
    </Grid>
    <Grid size={6} sx={{ p: 5,alignItems: 'center',  display: 'flex',flexDirection: 'column',justifyContent:{xm:'center',md:'flex-end'} }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#00bcd4', width:{ xs: 200,sm:250, md: 320 }, height: { xs: 200,sm:250, md: 360 }, borderRadius: '10%',overflow:'visible',position  :'relative'}}>
       <img src={Guideimage} alt="Guide" style={{
        position: 'absolute',  
      
        width: '100%',
        height: '115%', 
        bottom: '0%',
        left:'-10%',
        objectFit: 'cover',  
    }} />

    <img src={cloud} alt="cloud" style={{
        position: 'absolute',  width: '40%',
        height:'auto',top:'0%',left:'-15%',
        }}/>
    <Box sx={{position:'absolute',top:'25%',right:'-30%',width:{ xs: 30,sm:80, md: 150 }, height: { xs: 45,sm:100, md: 185 },borderRadius: '10%',backgroundColor:'white',boxShadow:'0px 4px 18px rgba(17, 12, 46, 0.15)',alignItems:'center',display:'flex',justifyContent:'center',flexDirection:'column'}}>
<img src={LiveImage} alt="Live" style={{
        position: 'relative',  
        width: '50%',
        height: '50%', 
        objectFit: 'cover',  
    }} />

    <Typography sx={{fontSize:{ xs: 10,sm:15, md: 30 },fontWeight:'900',color:'text.primary',textAlign:'center'}}>24/7</Typography>
    <Typography sx={{fontSize:{ xs: 5,sm:10, md: 15 },fontWeight:'600',color:'#94908f',textAlign:'center'}}>Guide Support</Typography>
    </Box>
      </Box>
    </Grid>
  </Grid>
  );
}

export default MainGrid_1;