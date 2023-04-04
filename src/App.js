import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { GithubStats } from "./Components/GithubStats";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <Box bg={useColorModeValue("#ecf9ff", "#171717")} className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
    </Box>
  );
}

export default App;
