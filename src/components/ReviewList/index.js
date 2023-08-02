
import { useEffect, useState } from 'react'
import axios from 'axios'
// import  FeedbackCard  from "../FeedbackCard";
import  FeedbackCard  from "../FeedbackCard";
// import {avatarClient1, avatarClient2, avatarClient3, avatarClient4, } from '../../img'

 
import './review-list.scss'

const baseURLreviews = 'https://6411a20ca7b02f6a03004928.mockapi.io/reviews';

const Feedback = () => {

    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
      axios
        .get(baseURLreviews)
        .then(data => setReviews(data.data))
    }, [])


    return (
        <section className='section section-reviews'>
            <div className='container'>
                <div className='section-reviews__wrapper'>
                    {reviews.map(review => {
                        return (
                                <FeedbackCard 
                                    className='section-reviews__wrapper_item'
                                    key={review.id}
                                    content={review.content}
                                    name={review.name}
                                    rating={review.rating}
                                    position={review.position}
                                    src={review.src}
                                    
                                />
                        )
                    })}
                </div>

            </div>           
                

        </section>
       
    )
}


export default Feedback