import { useForm , Controller } from "react-hook-form";
import { useState, useEffect} from 'react'
import { Rating } from '@mui/material';
import Modal from '../Modal';

import './review-form.scss'


const ReviewForm = () => {    
    const [isModalOpen, setIsModalOpen] = useState(false)
    // const [open, setOpen] = useState(false)
  
    useEffect(() => {
      (isModalOpen) ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
      
      return 
    }, [isModalOpen])

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        control, 
        reset,
        // watch,
        // setValue,
    } = useForm({
        mode: "onBlur",
        });

    const onSubmit = (data) => {
            // alert(JSON.stringify(data));
            setIsModalOpen(true)
            // reset();
        }

    
        return (
            <>
                <section className="section section-review-form">
                <div className="container">
                <h2 className="section__header">Залишити відгук</h2>
                    <div className="bg"></div>
                
                <form  className="form" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="form__subtitle">Ваша оцінка : </h4>
                    
                    <Controller 
                        control={control} 
                        name={"rating"} 
                        defaultValue={-1} 
                        render={({field: {onChange, value} })=> <Rating
                                className="form__rating"
                                name={"rating"}
                                onChange={onChange}
                                value={Number(value)}
                                sx={{
                                    fontSize: "4rem"
                                }}
                        />
                    }/>



                    <label className="form__label">
                        <input  
                            className="form__input" 
                            placeholder="Ваше ім'я *"
                            {...register('userName',{
                                required: "Поле обов'язкове", 

                                
                            })}
                        />
                    </label>
                    <div className="form__error">
                        {errors?.fromAddress && <span className="error"> {errors?.fromAddress?.message || "Error!"}</span>}
                    </div>

           <div className="inline-wrap">
                   <label className="form__label">
                       <input  
                           className="form__input form__input-mail " 
                                    placeholder="Ваша пошта"
                                    {...register('userEmail',{
            
                           })}
                       />
                   </label>
                   <div className="form__error">
                       {errors?.fromAddress && <span className="error"> {errors?.fromAddress?.message || "Error!"}</span>}
                   </div>
                   <label className="form__label">
                       <input 
                           className="form__input form__input-phone" 
                                    type="numder" 
                                    placeholder="+38" 
                                    label={'Ваш номер:'}
                                    {...register('userPhone',{
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
           </div>

                    <label className="form__label">
                        <input 
                            className="form__input" 
                            placeholder="Ваше повідомлення *"
                            {...register('userReview',{
                                required: "Поле обов'язкове",  

                            })}
                        />
                    </label>
                    <div className="form__error">
                        {errors?.toAddress && <span className="error"> {errors?.toAddress?.message || "Error!"}</span>}
                    </div>

                    <input 
                        // onClick={()=>setIsModalOpen(true)}
                        type="submit" 
                        className="btn primary" 
                        disabled={!isValid} 
                        value="Залишити відгук"/>
                </form>
                </div>

            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
                
            </section>

            </>

        
        )
}


export default ReviewForm