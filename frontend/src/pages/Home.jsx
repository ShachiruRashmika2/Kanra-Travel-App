import { Avatar, Box, Button, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/navbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Home = () => {
  return (
    <div className="home">
      <ResponsiveAppBar />
      <Grid container spacing={2} sx={{ m:'5%'}} >
        <Grid size={6} sx={{p:5,fontFamily:'Manrope'}} >
         <Typography variant='h2' sx={{fontSize:{xs:20,md:50},fontWeight:'800',color:'text.primary',textAlign:'left',my:2}}>
          People don't <br/>
          take trips, trips<br/>
          take people
         </Typography>
         <Typography  sx={{fontSize:{xs:10,md:15},fontWeight:'600',color:'text.primary',textAlign:'left',my:4}}>
         To get the best of your adventure you just<br/> need to leave and go where you like. We are<br/> waiting for you ! <br/>
         </Typography>
         <Box sx={{display:'flex',justifyContent:'left ',alignItems:'center'}}> 
          <Button variant="contained" endIcon={<ArrowForwardIosIcon sx={{fontSize:{xs:2,md:4}}}/>} sx={{mr:{sm:1,md:2},backgroundColor:'primary.main',color:'text.secondary',fontSize:{xs:10,md:15},fontWeight:'600',borderRadius:'12px',padding:{xs:1,md:2},textTransform:'none',width:{xs:100,md:150},height:{xs:30,md:55}}}>
Plan a trip
</Button>
<Box sx={{display:'flex'}}>
  <Avatar src='https://www.pexels.com/photo/woman-posing-wearing-winter-clothing-14504994/' alt='Face' sx={{width:{sm:30,md:70},height:{sm:30,md:70}}}/>
    <Typography sx={{fontSize:{xs:11,md:16},fontWeight:'600',color:'text.primary',textAlign:'left',ml:2 ,py:2}}>Watch our <br/>story</Typography>

</Box>



         </Box>


          </Grid>
          <Grid size={6}>
          <Paper>cvxc</Paper>
          </Grid>
      </Grid>


    </div>
  );
}

export default Home;