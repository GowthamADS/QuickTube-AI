import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Demo from "./components/Demo/Demo";
import TechStack from "./components/TechStack/TechStack";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Demo />
        <TechStack />
        <Workflow />
      </main>

      <Footer />
    </>
  );
}

export default App;