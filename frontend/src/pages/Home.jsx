import ResponsiveAppBar from '../components/navbar';
import MainGrid_1 from '../components/MainGrid1';
import MainGrid_2 from '../components/MainGrid_2';
import MainGrid_3 from '../components/MainGrid_3';
import MainGrid_4 from '../components/MainGrid_4';
import MainGrid_5 from '../components/MainGrid_5';
import MainGrid_6 from '../components/MainGrid_6';





const Home = () => {
  return (
    <div className="home">
      <ResponsiveAppBar />
      <MainGrid_1 />
      <MainGrid_2 />
      <MainGrid_3 />
      <MainGrid_4 />
      <MainGrid_5 />
      <MainGrid_6 />
      
      
     
    </div>
  );
}

export default Home;