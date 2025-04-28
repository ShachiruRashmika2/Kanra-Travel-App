import { Grid, Typography ,Box,Button, IconButton} from "@mui/material"
import Lady from '../assets/images/image (1).png';
import Cloud from '../assets/images/—Pngtree—white cloud hd transparent png_3595697.png';
import AmericanPlane from '../assets/images/americanPlane.png';
import WinterMan from '../assets/images/wintermanCam.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MainGrid_3 = () => {
    return (
        <Grid container spacing={2} sx={{ my: '5%',mx:'2%' ,px:'2%' ,backgroundColor:'#1f0e85',borderRadius:{xs:'5px',sm:'10px',md:'20px'}}} >
        <Grid size={4} sx={{ px: 5, py:0,display:'flex'}}>

          <Box sx={{bottom:'10%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',overflow:'visible',backgroundColor:'#00bcd4',width:"100%",height:{xs:'40%',sm:'50%',md:'60%',lg:'80%'},borderRadius:{xs:'5px',sm:'10px',md:'20px'},position:'relative'}}>
          <img src={WinterMan} alt="lady" 
        
        style={{
            position: 'absolute',  
          
            width: 'auto',
            height: '150%', 
            bottom: '0%',
          
            objectFit: 'cover',
            zIndex:3,  
        }}
        
        />

<Box sx={{  position: 'absolute',  
         bottom:'0%',
          zIndex:3, 
          width: { xs: 30,sm:80, md: 150 },
            height: { xs: 30,sm:80, md: 150 },
            display:{xs:'none',sm:'flex',md:'flex'}
            ,justifyContent:'center'
         
          }}>
        <img src={Cloud} alt="cloud" 
        
        style={{
          
            width: 'auto',
            height: '200%', 
           
            
            objectFit: 'cover',
             
        }}
        
        />

        </Box>

        <IconButton
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              width: { xs: 20, sm: 50, md: 80 },
              height: { xs: 20, sm: 50, md: 80 },
              zIndex: 2,
              position: 'absolute',
              left: '-5%',
              bottom: '-5%',
              boxShadow: '0px 4px 20px rgba(17, 12, 46, 0.2)',
              transition: 'all 0.3s ease-in-out',
              border:'2px solid white',
              zIndex:4,

            
              
              '&:hover': {backgroundColor:'primary.main', color:'white',animation:'bounce 1s ease-in-out forwards'},
            }}
            size="large"
          >
            <PlayArrowIcon fontSize="inherit" />
          </IconButton>
          </Box>




       </Grid>
       <Grid size={4} sx={{ px: 0,py:5 ,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
       
        <Typography sx={{ fontSize: { xs: 10, sm:12,md: 25 }, fontWeight: '800',color:'text.secondary', textAlign: 'left', my: 3 }}>
           Your travel companion that carries<br/>
        all the information 

        </Typography>
       <Box sx={{justifyContent:'center',alignItems:'center',display:'flex', transform:{md:'translateY(-20%)'},position:'relative'}}>
        <img src={AmericanPlane} alt="cloud" style={{width:'70%',height:'auto'}}/>
        
        
        </Box>

      
     

       </Grid>






       <Grid size={4} sx={{ p: 0,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column' }}>
        <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width:'100%',height:'100%',overflow:'visible',position  :'relative'}}
        
        >
        <img src={Lady} alt="lady" 
        
        style={{
            position: 'absolute',  
          
            width: 'auto',
            height: '150%', 
            bottom: '0%',
          
            objectFit: 'cover',
            zIndex:3,  
        }}
        
        />
        <Box sx={{position:'absolute',top:'-22%',left:{xs:'-51%',sm:'-35%',md:'-11%',lg:'-3%'},width:{ xs: 50,sm:70, md: 100 }, height:{ xs: 50,sm:70, md: 100 },borderRadius:'50%',backgroundColor:'yellow'}}>

        </Box>
        <Box sx={{  position: 'absolute',  
          top:'50%',
          left: {sm:'-2%',md:'-6%'},
          zIndex:3, 
          width: { xs: 30,sm:80, md: 150 },
            height: { xs: 30,sm:80, md: 150 },
            display:{xs:'none',sm:'flex',md:'flex'}
         
          }}>
        <img src={Cloud} alt="cloud" 
        
        style={{
          
            width: 'auto',
            height: '80%', 
           
            
            objectFit: 'cover',
             
        }}
        
        />

        </Box>
       
        </Box>

        
        </Grid>
       </Grid>
    );
};

export default MainGrid_3;