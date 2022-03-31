import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.scss';
import img from '../jpg/solar.jpg';

const slideImages = [
  {
    url: img,
    caption: 'Slide 1'
  },
  {
    url: img,
    caption: 'Slide 2'
  },
  {
    url: img,
    caption: 'Slide 3'
  }
];

const Slideshow = () => {
  return (
    <div id="slider" className="slide-container margin">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>
                <h1>{slideImage.caption}</h1>
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
