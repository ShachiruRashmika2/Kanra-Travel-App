import { Typography } from '@mui/material';
import ResponsiveAppBar from '../components/navbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Home = () => {
  return (
    <div className="home">
      <ResponsiveAppBar />
      <Grid container spacing={2} sx={{ backgroundColor:'primery.main',m:'5%'}} >
        <Grid size={6} sx={{p:5,fontFamily:'Manrope'}} >
         <Typography variant='h2' sx={{fontSize:{xs:20,md:50},fontWeight:'800',color:'text.primary',textAlign:'left',my:2}} color='text.primary'>
          People don't <br/>
          take trips, trips<br/>
          take people
         </Typography>
         <Typography  sx={{fontSize:{xs:10,md:15},fontWeight:'600',color:'text.primery',textAlign:'left',my:4}}>
         To get the best of your adventure you just<br/> need to leave and go where you like. We are<br/> waiting for you ! <br/>
         </Typography>


          </Grid>
          <Grid size={6}>
          <Paper>cvxc</Paper>
          </Grid>
      </Grid>


    </div>
  );
}

export default Home;