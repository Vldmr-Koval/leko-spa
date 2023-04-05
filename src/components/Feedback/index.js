import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import  FeedbackCard  from "../FeedbackCard";

import './feedback.scss'
import 'swiper/scss';
import 'swiper/scss/pagination';

const Feedback = () => {


    return (
        <section className='section'>
            <h2  className='section-header'> Відгуки наших клієнтів </h2>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    }}
                modules={[Pagination]}
                className="mySwiper"
                
                >
                <SwiperSlide>
                    <FeedbackCard
                        content={'Купила пралку в Епіцентрі, але там потрібно було чекати машину два дні. Подзвонила в Ношу - протягом години пральна машина була вже у мене вдома.'}
                        name={"Олеся"}
                        rating={4}
                        position={"Домогосподарка"}
                    />
                    
                </SwiperSlide>
                <SwiperSlide>
                <FeedbackCard
                        content={'Спілкуються ввічливо та культурно. Оператор - Юлія все розпитала й знайшла потрібну мені машину і вантажників. Все зробили оперативно'}
                        name={"Олексій"}
                        rating={5}
                        position={"Підприємець"}
                    />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard/>
                </SwiperSlide>
                
               
            
            </Swiper>
        </section>
       
    )
}


export default Feedback