import { useEffect, useState } from "react";
import Hero from "./components/parts/Hero";
import Projects from "./components/parts/Projects";
import Navbar from "./components/ui/Navbar";
import Stack from "./components/parts/Stack";
import About from "./components/parts/About";

function App() {
  const [isBackdrop, setIsBackdrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsBackdrop(scrollPosition >= window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isBackdrop={isBackdrop} />
      <Hero />
      <Projects />
      <Stack />
      <About />
    </>
  );
}

export default App;
