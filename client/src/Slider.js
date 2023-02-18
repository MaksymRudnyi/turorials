import Carousel from 'nuka-carousel';
import './slider.css';

export const Slider = () => {
  const slides = [
    'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
    'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
    'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'
  ]

  const params = {
    wrapAround: true,
    animation: 'zoom',
    slidesToShow: 2,
  }

  return (
    <div>
      <Carousel {...params}>
        {slides.map((slide) => (
          <img src={slide} key={slide}/>
        ))}
      </Carousel>
    </div>
  )
}