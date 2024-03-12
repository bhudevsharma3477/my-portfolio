import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';




const App = () => {

  return (
    <>
    <Header />
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
    <Footer />
    
    </>
  );
}

export default App;
