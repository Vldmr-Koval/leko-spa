import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
// import  FeedbackCard  from "../FeedbackCard";
import  FeedbackCard  from "../FeedbackCard";
// import {avatarClient1, avatarClient2, avatarClient3, avatarClient4, } from '../../img'


import './feedback.scss'
import 'swiper/scss';
import 'swiper/scss/pagination';

const baseURLreviews = 'https://6411a20ca7b02f6a03004928.mockapi.io/reviews';

const Feedback = () => {

    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
      axios
        .get(baseURLreviews)
        .then(data => setReviews(data.data))
    }, [])
    // console.log(reviews)

    return (
        <section className='section section-feedback'>
            <div className='container'>
                <h2  className='section__header'> Відгуки наших клієнтів </h2>
                {/* <div className="swiper-line"></div> */}
                
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={false}
                    pagination={{
                        dynamicBullets: true,
                        }}
                    modules={[Pagination]}
                    className="swiper__body"
                    breakpoints={{
                    600: {
                    slidesPerView: 2,
                    },
                    900: {
                    slidesPerView: 3,
                    },

                }}
                    
                    >

                    {reviews.map(review => {
                        return (
                            <SwiperSlide className='swiper__slide' key={review.id} >
                                <FeedbackCard
                                    key={review.id}
                                    content={review.content}
                                    name={review.name}
                                    rating={review.rating}
                                    position={review.position}
                                    src={review.src}
                                    
                                />
                        
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
                
                <NavLink className="section-feedback_btn btn " to={`/reviews`}> Залишити відгук </NavLink>
                
            </div>
            
        </section>
       
    )
}


export default Feedback