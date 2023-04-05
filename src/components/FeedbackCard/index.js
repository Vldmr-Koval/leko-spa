import PropsTypes from 'prop-types';
import  Image  from "../ui/Image";
// import Star from "../../img/star_active.svg"
import { Rating } from '@mui/material';

import './feedback-card.scss'


const FeedbackCard = ({
    src, content, name, position, rating
}) => {
    if(!src){
        src = '../../img/clients/avatar-2155431_1280.png'
    }

    
    return (
                
            <div className='feedback-card'>
                <Image 
                className='feedback-card__img'
                src={require('../../img/clients/avatar-2155431_1280.png')} 
                // не працює кректно посилання на картинку
                circle
                />
                <div className='show-stars flex'>
                <Rating name="size-small" defaultValue={rating} size="small" readOnly/>
                </div>
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