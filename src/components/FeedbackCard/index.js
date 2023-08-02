import PropsTypes from 'prop-types';
import  Image  from "../ui/Image";
import {avatarClient, quotes} from '../../img'

import { Rating } from '@mui/material';

import './feedback-card.scss'


const FeedbackCard = ({
    src, content, name, position, rating
}) => {
    if(!src){
        src = avatarClient
    }   

    
    return (
                
            <div className='feedback-card'>
                <Image 
                className='feedback-card__img'
                src={src} 
                circle
                />
                <Image 
                className='feedback-card__img-quotes'
                src={quotes} 
                />
                <Rating 
                    className='feedback-card__rating'
                    name="size-small" 
                    defaultValue={rating} 
                    size="small" readOnly/>
                <p className='feedback-card__content'>{content}</p>
                <p className='feedback-card__name'>{name}</p>
                <p className='feedback-card__position'>{position}</p>
            </div>
                
       
    )
}

FeedbackCard.propsTypes= {
    // src: PropsTypes.string,
    content: PropsTypes.string,
    rating: PropsTypes.number,
    name: PropsTypes.string,
    position: PropsTypes.string,

}
FeedbackCard.defaultProps= {
    // src: '',
    content: 'Спілкуються ввічливо та культурно. Оператор - Юлія все розпитала й знайшла потрібну мені машину і вантажників. Все зробили оперативно',
    rating: 5,
    name: 'Саша',
    position: 'громадянин',

}

export default FeedbackCard