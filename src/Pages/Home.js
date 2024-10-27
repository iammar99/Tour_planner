import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import tour from '../assets/tour.png'

export default function Home() {
  return (
    <main>
      {/* SECTION 2 */}
      <h1 className='text-center mt-5'>Information About Our AI</h1>
      <div className="container">
        <div className="row my-5">
          <div className="col d-flex">
            <p className="text-center" style={{ width: "72%" }}>Our AI travel guide revolutionizes the way you explore the world by leveraging cutting-edge technology to understand and anticipate your travel preferences. By simply entering your desired destination, travel dates, and interests, our intelligent system generates a customized itinerary that highlights key attractions, local dining options, and unique activities. This level of personalization means that you can experience a destination through your own lens, immersing yourself in what you truly enjoy—be it culinary adventures, outdoor activities, or cultural explorations. The AI is designed to learn from your feedback, continuously refining its recommendations for future trips and ensuring that each journey is better than the last. <br /> <br /> Moreover, our AI travel guide acts as your 24/7 companion, providing real-time assistance throughout your journey. Need a last-minute restaurant recommendation? Want to know the best way to navigate public transport? Our AI can answer your queries instantly, allowing you to make informed decisions on the go. This feature reduces the stress of travel and allows you to focus on enjoying your experience. With the ability to adapt to changing circumstances, such as weather disruptions or changes in local conditions, the AI ensures you remain on track and can make the most of your time.</p>
            <img src={tour} className='ms-5' style={{ height: "362px" }} alt="tour-img" />
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <h1 className='text-center mt-5'>Features of AI</h1>
      <div className="container">
        <div className="row my-5">
          <Card title="Image-Driven Inspiration" text="One of the standout features of our AI travel guide is its ability to utilize stunning images to inspire your travel choices. When you input your desired destination or interests, the AI presents a visually rich interface showcasing beautiful photos of landmarks, landscapes, and experiences.It making it easier to choose activities that resonate with your vision of the perfect getaway." />
          <Card title="Step-by-Step Instructions" text="Our AI travel guide goes beyond mere recommendations by offering clear, step-by-step instructions for navigating each destination. Whether you need guidance on how to get from your hotel to a specific attraction, tips for using public transportation, or detailed directions for hiking a scenic trail, the AI provides concise and practical advice." />
          <Card title="Comprehensive Recommendations" text="In addition to images and instructions, the AI travel guide offers a wealth of comprehensive recommendations tailored to your preferences. From local dining spots and hidden gems to historical sites and cultural activities, the AI curates a personalized list of must-visit locations and experiences." />
          <div className="d-flex justify-content-center">
            <Link to={"/agent"}><button className='neu-button mt-5'>Welcome</button></Link>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <h1 className='text-center mt-5'>Why We Need This AI</h1>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col">
            <p className='p-4'>Welcome to your personal travel guide, powered by AI! Our tour-planning platform is designed to make exploring the world easy, inspiring, and tailored just for you. With detailed insights into cities, historical landmarks, iconic mosques, scenic spots, and must-visit places across countries, we guide you to the perfect destinations based on your preferences. Whether you're looking to spend ten unforgettable days exploring ancient ruins, experiencing vibrant local markets, or discovering architectural marvels, our AI curates a custom itinerary that ensures you make the most of every moment. From cultural highlights to hidden gems, each recommendation is carefully selected to match your travel style and chosen country. So, tell us your destination, and let our AI create a seamless, memorable travel plan that lets you explore the world with confidence and excitement!</p>
          </div>
        </div>
      </div>
    </main>
  )
}
