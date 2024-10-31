
import React from 'react';
export default function otherCards(props) {
    return (

        <div className='col-lg-4 col-sm-12 col-md-6 mt-4'>
            <div className="card cardHover text-center mx-auto" data-aos="fade-up"
     data-aos-duration="3000" style={{"height":"295.38px","transition":"all ease 0.3s"}} >
                <img className="mt-3" id="techImg" style={props.style||{"width":"50px","margin":"30px auto"}} src={props.img} alt="icon" />
                <h6>{props.heading}</h6>
                <p className="p-3">{props.text}</p>
            </div>
        </div>

    )
}