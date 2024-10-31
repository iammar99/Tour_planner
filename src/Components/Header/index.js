import React from 'react'
import { Link } from 'react-router-dom'
import '../../SCSS/Pages/_frontend.scss'
export default function TopNav() {
    return (
        <header>
            <div className="backImg">
                <div className="animation">
                    <h1 className='text-center px-3'>TourGuide Ai</h1>
                    <div className="d-flex justify-content-center my-3">
                        <p className='text-center '  style={{  fontSize:"20px" }}>Your Journey, Guided by AI - Explore Smarter, Travel Deeper..</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to={"/agent"}><button className='button1'>Try Now!</button></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
