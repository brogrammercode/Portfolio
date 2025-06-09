import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="padded-body">
        <NavBar />
        <About />
        <Grid />
      </div>
      <Footer />
    </>
  );
}

export default App;
