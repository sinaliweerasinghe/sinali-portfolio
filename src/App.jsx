import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import EducationTools from './components/EducationTools/EducationTools';
import Tools from './components/Tools/Tools';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <EducationTools />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;