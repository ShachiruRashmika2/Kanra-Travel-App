import { Avatar, Badge, Box, Button, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Guideimage from '../assets/images/binoMan.png';
import LiveImage from '../assets/images/Live.png';
import cloud from '../assets/images/rain-png-34472.png';



const MainGrid_1 = () => {
  return (
    <Grid container spacing={1} sx={{ m: '5%' ,px:'2%',width:'100%',display:'flex',alignItems:'center',justifyContent:'space-around'}} data-aos="fade-up">
    <Grid size={6} sx={{ p:5,pl:'10%'}}> 
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 15, md: 30,lg:50 },
          fontWeight: '800',
          color: 'text.primary',
          textAlign: 'left',
          my: {xs:0.5,md:2,lg:2},
        }}
      >
        People don't <br />
        take trips, trips
        <br />
        take people
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 7, md: 15 },
          fontWeight: '600',
          color: 'text.primary',
          textAlign: 'left',
          my: {xs:1,md:4,lg:4},
        }}
      >
        To get the best of your adventure you just
        <br /> need to leave and go where you like. We are
        <br /> waiting for you! <br />
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
        <Button
          variant="contained"
        
          sx={{
            mr: { sx:1,sm: 1, md: 2 },
            backgroundColor: 'primary.main',
            color: 'text.secondary',
            fontSize: { xs: 5, md: 15 },
            fontWeight: '600',
            borderRadius: '12px',
            padding: { xs: 0, md: 2 },
            textTransform: 'none',
            width: { xs: 30, md: 150 },
            height: { xs: 20, md: 55 },
          }}
        >
          Plan a trip
          <ArrowForwardIosIcon  sx={{
      fontSize: { xs: 5, sm: 12, md: 18 },ml:{xs:0.5,sm:0,md:1}
    }}/>
        </Button>


        <Box
          sx={{
            width: { xs:25,sm: 40, md: 60, lg: 68 },
            height: { xs:25,sm: 40, md: 60, lg: 68 },
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(43, 248, 255, 1) 0%, rgba(237, 83, 104, 1) 100%)',
            position: 'relative',
            ml: { xs: 0.1, sm: 1, md: 0,lg:0 },
          }}
        >
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/14504994/pexels-photo-14504994.jpeg"
            sx={{
              width: { xs:22,sm: 35, md: 52, lg: 60 },
              height: { xs:22,sm: 35, md: 52, lg: 60 },
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
              width: { xs: 15, sm: 20,md:30, lg: 35 },
              height: { xs: 15, sm: 20, md:30,lg:35 },
            
              
              '&:hover': {backgroundColor:'primary.main', color:'white',animation:'bounce 1s ease-in-out forwards'},
            }}
            
          >
            <PlayArrowIcon  sx={{
      fontSize: { xs: 11, sm: 14, lg: 24,md:24 }
    }}/>
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 8, md: 16 },
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
    <Grid size={6} sx={{ p: 5,alignItems: 'center',  display: 'flex',flexDirection: 'column',justifyContent:{xm:'center',md:'flex-end'},pr:'10%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#00bcd4', width:{ xs: 100,sm:250, md: 320 }, height: { xs: 120,sm:280, md: 360 }, borderRadius: '10%',overflow:'visible',position  :'relative'}}>
       <img src={Guideimage} alt="Guide" style={{
        position: 'absolute',  
      
        width: '100%',
        height: 'auto', 
        bottom: '0%',
        left:'-10%',
        objectFit: 'cover',  
    }} />

    <img src={cloud} alt="cloud" style={{
        position: 'absolute',  width: '40%',
        height:'auto',top:'0%',left:'-15%',
        }}/>
    <Box sx={{position:'absolute',top:{xs:30,sm:85,lg:80},right:{xs:-25,sm:-40,lg:-100},width:{ xs: 40,sm:80, md: 150 }, height: { xs: 60,sm:120, md: 185 },borderRadius: '10%',backgroundColor:'white',boxShadow:'0px 4px 18px rgba(17, 12, 46, 0.15)',alignItems:'center',display:'flex',justifyContent:'center',flexDirection:'column'}}>
<img src={LiveImage} alt="Live" style={{
        position: 'relative',  
        width: '50%',
        height: 'auto', 
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