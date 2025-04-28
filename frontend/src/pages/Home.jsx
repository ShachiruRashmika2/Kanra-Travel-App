import ResponsiveAppBar from '../components/navbar';
import MainGrid_1 from '../components/MainGrid1';
import MainGrid_2 from '../components/MainGrid_2';
import MainGrid_3 from '../components/MainGrid_3';





const Home = () => {
  return (
    <div className="home">
      <ResponsiveAppBar />
      <MainGrid_1 />
      <MainGrid_2 />
      <MainGrid_3 />
      
      
     
    </div>
  );
}

export default Home;