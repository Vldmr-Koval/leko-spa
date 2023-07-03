import { useForm } from "react-hook-form";
import { useState, useEffect} from 'react'
import Image from '../ui/Image'

import {ReactComponent as Phone} from '../../img/form/svg/phone_1.svg';
import {ReactComponent as Place} from '../../img/form/svg/place.svg';

import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation} from 'swiper';
// import { useSwiper, useSwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './form.scss'


const Form = () => {    

    const [counterDocker, setCounterDoker] = useState(0);
    const [counterPassenger, setCounterPassenger] = useState(0);


    useEffect(() => {
        setCounterDoker(1);
        setCounterPassenger(1);
      }, []);

    const plusOneDocker = (e) => {
        e.preventDefault();
        if (counterDocker <10 ) {
            let result = counterDocker + 1;
            setCounterDoker(result)
            setValue('counterDocker', result)
        }
    };
    const minusOneDocker = (e) => {
        e.preventDefault();
        if (counterDocker > 0) {
            let result = counterDocker - 1;
            setCounterDoker(result)
            setValue('counterDocker', result)
        }
    };

    const plusOnePassenger = (e) => {
        e.preventDefault();
        if (counterPassenger <10 ) {
            let result = counterPassenger + 1;
            setCounterPassenger(result)
            setValue('counterPassenger', result)
        }
    };
    const minusOnePassenger = (e) => {
        e.preventDefault();
        if (counterPassenger > 0) {
            let result = counterPassenger - 1;
            setCounterPassenger(result)
            setValue('counterPassenger', result)
        }
    };

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        // reset,
        // watch,
        setValue,
    } = useForm({
        mode: "onBlur",
        });

    const onSubmit = (data) => {
            alert(JSON.stringify(data));
            // reset();
        }

    
        return (
            <section className="section container">
                <h2 className="section__header">Ну що, поїхали?</h2>
                <form  className="form" onSubmit={handleSubmit(onSubmit)}>
                    
                    <label className="form__label">
                        Ваш номер:
                        <Phone  width={25} className="form__icon"/>
                        <input className="form__input" type="numder" placeholder="+38" label={'Ваш номер:'}
                            {...register('clientPhone',{
                                required: "Поле обов'язкове",
                                minLength: {
                                    value: 5,
                                    message: "Error! Too short value"
                                },
                                pattern: {
                                    value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                                    message: "Некоректно введений номер телефону"
                                }
                                
                            })}
                        />
                    </label>
                    <div className="form__error">
                        {errors?.clientPhone && <span className="error"> {errors?.clientPhone?.message || "Error!"}</span>}
                    </div>
                    
                    <label className="form__label">
                        Куди під'їхати:
                        <Place width={25} className="form__icon"/>
                        <input  className="form__input" placeholder="Вулиця"
                            {...register('fromAddress',{
                                required: "Поле обов'язкове", 

                                
                            })}
                        />
                    </label>
                    <div className="form__error">
                        {errors?.fromAddress && <span className="error"> {errors?.fromAddress?.message || "Error!"}</span>}
                    </div>

                    <label className="form__label">
                        Куди веземо:
                        <Place width={25} className="form__icon"/>
                        <input className="form__input" placeholder="Вулиця"
                            {...register('toAddress',{
                                required: "Поле обов'язкове",  

                            })}
                        />
                    </label>
                    <div className="form__error">
                        {errors?.toAddress && <span className="error"> {errors?.toAddress?.message || "Error!"}</span>}
                    </div>

                    <div className="counter-section">        
                        <div className="counter-wrap">
                            <h4 className="counter-wrap__header">Вантажники</h4>
                            <button 
                                className="counter-btn" 
                                onClick={minusOneDocker}>
                                -
                            </button>
                            <input className="counter-content"
                                {...register("counterDocker")} 
                                value={counterDocker}
                                disabled 
                                />
                            <button className="counter-btn" onClick={plusOneDocker}>+</button>
                            
                        </div>
                        <div className="counter-wrap">
                            <h4 className="counter-wrap__header">Пасажири</h4>
                            <button 
                                className="counter-btn" 
                                onClick={minusOnePassenger}>
                                -
                            </button>
                            <input className="counter-content"
                                {...register("counterPassenger")}
                                value={counterPassenger} 
                                disabled    
                                />
                            <button 
                                className="counter-btn" 
                                onClick={plusOnePassenger}>
                                +
                            </button>
                            
                        </div>         
                    </div> 
                    <div className=''>
                        <h4  className=' car__header'> Тип машини </h4>
                        
                        <input className="form-car"
                            {...register('car')} value={1}/>
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".swiper-button-prev",
                                nextEl: ".swiper-button-next"
                                }}
                            spaceBetween={100}
                            slidesPerView={1}
                            // loop={true} при увімкненому параметрі - не працює конструкція нижче!
                            onSlideChange={(swiper) => setValue('car', (swiper.activeIndex + 1))}
                            className="mySwiper form-slider">

                            
                            <SwiperSlide>
                            
                                <div className="form-slide">
                                    <Image src={require("../../img/form/kangoo.webp")} title="Мінівен"/>
                                    <h5>Мінівен</h5>
                                    <p>до 800кг (до 4 м.куб)</p>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="form-slide">
                                    <Image src={require("../../img/form/mercedes.webp")} title="Спринтер"/>
                                    <h5>Спринтер</h5>
                                    <p>до 2 т (до 8 м.куб)</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="form-slide">
                                    <Image src={require("../../img/form/jac.webp")} title="Фотон"/>
                                    <h5>Фотон</h5>
                                    <p>до 3 т (до 15 м.куб) </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="form-slide">
                                    <Image src={require("../../img/form/gazel.webp")} title="Газель"/>
                                    <h5>Газель</h5>
                                    <p>до 5 т (до 25 м.куб)</p>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="form-slide">
                                    <Image src={require("../../img/form/gruzovik.webp")} title="Вантажівка"/>
                                    <h5>Вантажівка</h5>
                                    <p>до 10 т (до 40 м.куб) </p>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="form-slide">
                                    <Image src={require("../../img/form/tiagach.webp")} title="Тягач"/>
                                    <h5>Тягач</h5>
                                    <p>до 20 т (до 86 м.куб) </p>
                                </div>
                                
                            </SwiperSlide>
                            
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </Swiper>
                    </div>
                    <input type="submit" className="btn primary" disabled={!isValid} value="ЗАМОВИТИ"/>
                </form>
                
            </section>
        
        )
}


export default Form