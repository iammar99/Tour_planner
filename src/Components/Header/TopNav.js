import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <header>
      <div className="backImg">
        <div className="animation">
          <h1 className='text-center px-3'>Adventure Beyond Limits,Where Thrills Meet Nature.</h1>
          <div className="d-flex justify-content-center my-3">
            <h5 className='text-center' style={{ width: "65%" }}>Push your boundaries and discover the thrill of the unknown with experiences that challenge, inspire, and captivate.Experience the best of both worlds with exhilarating activities set in stunning, natural backdrops.</h5>
          </div>
          <div className="d-flex justify-content-center">
            <Link to={"/agent"}><button className='button1'>Welcome</button></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
