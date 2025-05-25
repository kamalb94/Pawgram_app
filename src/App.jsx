
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import BreedDetails from "./components/BreedDetails";
import Breeds from "./components/Breeds";
import Header from "./components/Header";
import PawgramLanding from "./components/Landing";
import Stories from "./components/Stories";



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PawgramLanding />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/breed/:name" element={<BreedDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </>
  );
}

export default App
