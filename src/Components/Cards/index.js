import { useEffect, React} from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';

import '../../SCSS/Components/_cards.scss'
export default function Cards(props) {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can set the duration here
    }, []);
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
                <div className="card mx-auto p-2" data-aos="zoom-in" style={{height:"400px"}}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <h5 className='mt-4'>{props.title}</h5>
                    <p className='py-2 px-3'>{props.text}</p>
                </div>
            </div>
        </>
    )
}
