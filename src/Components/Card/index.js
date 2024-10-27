import React from 'react'

export default function index(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
                <div className="card mx-auto">
                    <h5 className='mt-4'>{props.title}</h5>
                    <p className='py-2 px-3'>{props.text}</p>
                </div>
            </div>
        </>
    )
}
