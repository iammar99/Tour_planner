import React from 'react'

export default function LowerFooter() {
  let year = new Date().getFullYear()
  return (
    <footer className='p-2' style={{backgroundColor:" rgba(58, 71, 80, 0.75)"}}>
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="mb-0 text-center text-white">&copy;{year}. All Rights Reserved by Ai Crafters</p>
        </div>
      </div>
    </div>
    </footer>
  )
}
