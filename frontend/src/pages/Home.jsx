import ResponsiveAppBar from '../components/Navbar';
import MainGrid_1 from '../components/MainGrid1';
import MainGrid_2 from '../components/MainGrid_2';
import MainGrid_3 from '../components/MainGrid_3';
import MainGrid_4 from '../components/MainGrid_4';
import MainGrid_5 from '../components/MainGrid_5';
import MainGrid_6 from '../components/MainGrid_6';
import MainGrid_7 from '../components/MainGrid_7';
import MainGrid_8 from '../components/MainGrid_8';
import BottomBar from "../components/BottomBar";
import { Box } from '@mui/material';
import useAOS from '../utils/AOS';





const Home = () => {
 
 useAOS();
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <ResponsiveAppBar />
      <MainGrid_1 />
      <MainGrid_2 />
      <MainGrid_3 />
      <MainGrid_4 />
      <MainGrid_5 />
      <MainGrid_6 />
      <MainGrid_7 />
      <MainGrid_8 />
      <BottomBar />
      
      
     
    </Box>
  );
}

export default Home;