import Hero from '../components/Hero';
import Footer from '../components/Footer';

import c from '../assets/carousel_images/Image.png'
import c1 from '../assets/carousel_images/Image 1.png'
import c2 from '../assets/carousel_images/Image 2.png'
import c3 from '../assets/carousel_images/Image 3.png'
import c4 from '../assets/carousel_images/Image 4.png'

import section1 from '../assets/section_images/sec1.png'
import section2 from '../assets/section_images/sec2.png'
import section3 from '../assets/section_images/sec3.png'

import midsec from '../assets/mid_sec/Image.png'
import midsec1 from '../assets/mid_sec/Image-1.png'
import midsec2 from '../assets/mid_sec/Image-2.png'
import WorkWithUs from './WorkWithUs'

function Home(){
    return(
        <>
        <Hero />
     {/* Writing the main section */}
     <div>
      <div className = "who_we_are_container">
        <p className='caption1'> WHO WE ARE</p>
        <p className = 'heading2'>We're Our Blooms® and we're here to help you find your floral story.</p>
        <button className = " button_danger"> .About US</button>
      </div>

      <div className = "carousel">
        <img src={c} alt="carousel image" />
        <img src={c1} alt="carousel image" />
        <img src={c2} alt="carousel image" />
        <img src={c3} alt="carousel image" />
        <img src={c4} alt="carousel image" />
      </div>

      <div className='what_we_do'>
        <p className='heading1'> What We Do</p>
        <p className='paragraph1'> We bring a touch of that simple magic into your world.</p>
      </div>
      <hr/>

      <div className='section1'>
        <p className='heading1'> 1 </p>
        <img src={section1} alt ="section image" />
        <p className='heading1'> FLORAL INSTALLATIONS </p>
        <p className='paragraph1'> Living art for homes, businesses, and events.</p>
        <hr/>
      </div>

      <div className='section1'>
        <p className='heading1'> 2 </p>
        <img src={section2} alt ="section image" />
        <p className='heading1'> NATIVE PLANT ARRANGEMENTS </p>
        <p className='paragraph1'> Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
        <hr/>
      </div>

      <div className='section1'>
        <p className='heading1'> 2 </p>
        <img src={section3} alt ="section image" />
        <p className='heading1'> CUSTOM FLORAL CONCEPTS</p>
        <p className='paragraph1'>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
        <hr/>
      </div>

      <picture>
      <source media ="(min-width: 1200px)" srcSet={midsec} />
      <source media ="(min-width: 800px)" srcSet={midsec1} />
      <img src={midsec2} alt="mid section image" />
      </picture>

      <WorkWithUs />

     </div>

      <Footer />
        </>
    )
}
export default Home;