import NavBar from "../components/navbar";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <h1>Home Page</h1>
      <h1>Welcome to the Home Page</h1>
      <img src="../assets/images/binoMan.png" alt="Logo" />
      <p>This is the home page of our application.</p>
    </div>
  );
}

export default Home;