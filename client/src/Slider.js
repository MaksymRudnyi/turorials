import { Carousel } from './Carousel';
const slides = [
  'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
  'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
  'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
  'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/6ZZjNFjTlO9F25467CruIibwuxl.jpg'
]


export const Slider = () => {
  return (
    <Carousel>
      {slides.map((slide) => <img src={slide} key={slide}/>)}
    </Carousel>
    )

}