import { Grid, Typography ,Box,Button} from "@mui/material"
import Lady from '../assets/images/image (1).png';

const MainGrid_3 = () => {
    return (
        <Grid container spacing={2} sx={{ my: '5%',mx:'2%' ,px:'2%' ,backgroundColor:'#1f0e85',borderRadius:{xs:'5px',sm:'10px',md:'20px'}}} >
        <Grid size={4} sx={{ p: 5, }}>

       </Grid>
       <Grid size={4} sx={{ p: 5, }}>

       </Grid>
       <Grid size={4} sx={{ p: 0,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column' }}>
        <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width:{ xs: 200,sm:250, md: 320 }, height: { xs: 200,sm:250, md: 360 }, borderRadius: '10%',overflow:'visible',position  :'relative'}}
        
        >
        <img src={Lady} alt="lady" 
        
        style={{
            position: 'absolute',  
          
            width: 'aut0',
            height: '160%', 
            bottom: '0%',
          
            objectFit: 'cover',
            zIndex:3,  
        }}
        
        />
        <Box sx={{position:'absolute',top:'-30%',left:{sm:'-18%',md:'-25%'},width:{ xs: 10,sm:70, md: 100 }, height:{ xs: 10,sm:70, md: 100 },borderRadius:'50%',backgroundColor:'yellow'}}>

        </Box>
        </Box>

        
        </Grid>
       </Grid>
    );
};

export default MainGrid_3;