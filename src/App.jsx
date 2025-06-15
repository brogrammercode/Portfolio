import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/project/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;

const Body = () => {
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
};

