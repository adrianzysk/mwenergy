import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Contact from './components/Contact';
import Info from './components/Info';
import img from './jpg/solar.jpg';

function App() {
  return (
    <div>
      <Header />
      <div className="img-wrapper">
        <img src={img} />
        <div className="overlay">
          <h2>LOREM IPSUM</h2>
          <div className="button-group">
            <a href="#info" className="button-image">
              OFERTA
            </a>
            <a className="button-image" href="#contact">
              KONTAKT
            </a>
          </div>
        </div>
      </div>
      <Info />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
