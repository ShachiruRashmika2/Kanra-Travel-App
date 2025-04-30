import {
    Grid,
    Typography,
    Box,
    Button,
    IconButton,
    Stack,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Avatar,Chip

} from "@mui/material";
import Camaraman from "../assets/images/camaraman.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import liveGreen from '../assets/images/LiveGreen.png';

const MainGrid_8 = () => {
    return (
        
        <Grid container spacing={2} sx={{ m: '5%' ,px:2,py:2}} >
        <Grid size={6} sx={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',position:'relative'}}>
          <Box sx={{display:'flex',flexDirection:'column',backgroundColor:'#e2d7c8',width:'100%',borderRadius:{xs:2,sm:8,md:16},height:400,alignItems:'center',justifyContent:'center'}}>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width:{ xs: 200,sm:250, md: 330 }, height: { xs: 200,sm:250, md: 400 }, borderRadius: '10%',overflow:'visible',position  :'relative'}}>
                   <img src={Camaraman} alt="camman" style={{
                    position: 'absolute',  
                  
                    width: '100%',
                    height: '115%', 
                    bottom: '0%',
                   
                    objectFit: 'cover',  
                }} /></Box>
            
            </Box>    
          <Box sx={{display:'flex',flexDirection:'row',position:'absolute',zIndex:2,bottom:'30%',width:'60%',backgroundColor:'white',alignContent:'center',justifyContent:'space-between',p:2
,height: { xs: 15,sm:20, md: 60 },borderRadius:{xs:1,sm:2,md:5}


          }}>
<Typography sx={{fontSize:{ xs: 8,sm:1, md: 20 },fontWeight:'900',color:'text.primary',textAlign:'left'}}>
    Explore the world<br/> with us 🌍
</Typography>
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


          </Box>
        </Grid>
        <Grid size={3} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} spacing={0.5}>
        <Box sx={{display:'flex',flexDirection:'column',backgroundColor:'#c0f5ff',width:'90%',borderRadius:{xs:2,sm:5,md:8},height:'40%',alignItems:'center',justifyContent:'center',m:1,p:1}}>
           
           <Box sx={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between',p:0.5,width:'100%'}}>
              <Typography sx={{fontSize:{ xs: 8,sm:1, md: 20 },fontWeight:'900',color:'text.primary',textAlign:'left',m:2}}>Read our<br/>blog</Typography>
              <Box  sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56},justifyContent:'center',alignItems:'center',display:'flex'}}>
      <IconButton aria-label="right" sx={{color:'text.primary',mx:2}} size="large"  >
                    <ArrowOutwardRoundedIcon/>
      
      </IconButton></Box>
           </Box>
           <Box sx={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between',p:0.5,width:'100%'}}>
           <Typography sx={{fontSize:{ xs: 8,sm:10, md: 15 },fontWeight:'600',color:'text.primary',textAlign:'left',m:2}}>We have share our journey <br/> and some story</Typography>
           </Box>
            </Box>
           

            <Box sx={{display:'flex',flexDirection:'column',backgroundColor:'#e2fece',width:'90%',borderRadius:{xs:2,sm:5,md:8},height:'40%',alignItems:'center',justifyContent:'center',m:1,p:1}}>
           
           <Box sx={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between',p:0.5,width:'100%'}}>
              <Typography sx={{fontSize:{ xs: 8,sm:1, md: 20 },fontWeight:'900',color:'text.primary',textAlign:'left',m:2}}>See our<br/>workflow</Typography>
              <Box  sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56},justifyContent:'center',alignItems:'center',display:'flex'}}>
      <IconButton aria-label="right" sx={{color:'text.primary',mx:2}} size="large"  >
                    <ArrowOutwardRoundedIcon/>
      
      </IconButton></Box>
           </Box>
           <Box sx={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between',p:0.5,width:'100%'}}>
           <Typography sx={{fontSize:{ xs: 8,sm:10, md: 15 },fontWeight:'600',color:'text.primary',textAlign:'left',m:2}}>It's a must to that we would <br/> like to share our workflow to <br/>belive you</Typography>
           </Box>
            </Box>






        </Grid>
        <Grid size={3} >
        <Box sx={{display:'flex',flexDirection:'column',backgroundColor:'#f2e8de',width:'90%',borderRadius:{xs:2,sm:5,md:8},height:'90%',alignItems:'center',justifyContent:'space-between',m:1,p:1}}>
           
           <Box sx={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between',p:0.5,width:'100%'}}>
              <Typography sx={{fontSize:{ xs: 8,sm:1, md: 20 },fontWeight:'900',color:'text.primary',textAlign:'left',m:2}}>Read our<br/>blog</Typography>
              <Box  sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56},justifyContent:'center',alignItems:'center',display:'flex'}}>
      <IconButton aria-label="right" sx={{color:'text.primary',mx:2}} size="large"  >
                    <ArrowOutwardRoundedIcon/>
      
      </IconButton></Box>
           </Box>
           <Box sx={{display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center',p:1,width:'90%',backgroundColor:'white',borderRadius:{xs:2,sm:5,md:8},height:'40%',alignItems:'center',m:1}}>
            <Box component={'img'} src={liveGreen} sx={{position: 'relative',  
        width: '60%',
        height: '100%', 
        objectFit: 'cover',  }}></Box>
            </Box>
           <Box sx={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between',p:0.5,width:'100%'}}>
           <Typography sx={{fontSize:{ xs: 8,sm:10, md: 15 },fontWeight:'600',color:'text.primary',textAlign:'left',m:2}}>We have share our journey <br/> and some story</Typography>
           </Box>
            </Box>
        </Grid>
        
      </Grid>
   
    );
};

export default MainGrid_8;