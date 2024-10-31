import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Cards'
import tour from '../assets/tour.png'
import img1 from '../assets/undraw_landscape_mode_re_r964.svg'
import img2 from '../assets/undraw_tourist_map_re_293e.svg'
import img3 from '../assets/undraw_right_direction_tge8.svg'
import img4 from '../assets/react.png'
import img5 from '../assets/gpt.png'
import img6 from '../assets/unsplash.png'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import OtherCards from 'Components/OtherCards'
import '../SCSS/Pages/_frontend.scss'
export default function Home() {
  return (
    <>
      <Header />
      <main className='mt-5'>
        {/* SECTION 2 */}
        <h1 className='text-center mt-5 '>What is TourGuide Ai?</h1>
        <div className="container mb-5">
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
              <p className='p-3 text-center'>TourGuide AI is an innovative travel companion designed to enhance your travel experience by providing personalized, real-time insights about destinations worldwide. With just a location input, TourGuide AI presents curated information about famous landmarks, cultural highlights, local recommendations, and unique attractions. Tailored to meet the needs of modern explorers, TourGuide AI uses intelligent algorithms to guide you effortlessly, helping you explore new places, discover hidden gems, and make the most of every journey. Whether you’re traveling for adventure, relaxation, or culture, TourGuide AI brings the world’s wonders to your fingertips.</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-5 d-flex justify-content-center">
              <img src={tour} style={{ height: "300px" , width:"100%" }} alt="tour-img" />
            </div>
          </div>
        </div>
        {/* SECTION 3 */}
        <h1 className='text-center mt-5'>Features of AI</h1>
        <div className="container">
          <div className="row my-5">
            <Card img={img1} title="Image-Driven Inspiration" text="TourGuide AI offers users vivid images of iconic places tailored to their chosen location, enhancing travel inspiration. Alongside photos, it shares valuable travel insights for a complete exploration experience." />
            <Card img={img2} title="Comprehensive Recommendations" text="TourGuide AI recommends top-rated places that capture the essence of each location for a memorable experience. With curated suggestions, it helps users explore destinations comprehensively and enjoyably." />
            <Card img={img3} title="Enhanced Travel Insights" text="The TourGuide AI provides information on famous places along with tips on transport, cultural etiquette, and the best times to visit, ensuring travelers are well-prepared for their journeys." />
            <div className="d-flex justify-content-center mt-5">
              <Link to={"/agent"}>
              
<button className="button">
  Try Now
  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      clipRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fillRule="evenodd"
    ></path>
  </svg>
</button>

</Link>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <h1 className='text-center mt-5'>Technologies Used</h1>
        <div className="container mt-5 mb-3">
          <div className="row">
            <OtherCards img={img4} heading="React" text="React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies." />
            <OtherCards img={img5} heading="Open Ai GPT" text="OpenAI GPT is a language model that generates human-like text, enabling applications from chatbots to creative writing." />
            <OtherCards img={img6} heading="Unsplash" text="Unsplash is a platform with free, high-quality images from global photographers for personal and commercial use." />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
