// import Image from '../../components/ui/Image'
import RevieList from '../../components/ReviewList'
import ReviewForm from '../../components/ReviewForm'
import {ReactComponent as Bg} from '../../img/bg-review.svg'
import { useOutletContext } from "react-router-dom";

import './reviews.scss'

const Reviews = () => {

    return (
        <>
        <section className="section section-reviews">

            <div className="section-reviews-bg"></div> 
            <div className="section-reviews__wrap">
                <div className="section-reviews__wrap_header">
                    ВІДГУКИ НАШИХ КЛІЄНТІВ
                </div>
                <Bg/>
            </div> 

        </section>
        <RevieList/>
        <ReviewForm />
        </>

       
    )
}


export default Reviews