import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SimpleSlider from './components/Carousel';
import Plants from './components/Plants';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenuListComposition from './components/MenuButton';
import Slideshow from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Slideshow></Slideshow>
      <Body></Body>
      <Plants></Plants>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
