import PropsTypes from 'prop-types';
import { useEffect } from 'react';
import Image from '../ui/Image'
import './modal.scss'
import {successComent} from '../../img'
import { useOutletContext } from "react-router-dom";

const Modal = ({ setIsModalOpen}) => {

    const {setIsScrollingEnabled} = useOutletContext();

    const handleSubmit = () => {
        setIsModalOpen(false);
        setIsScrollingEnabled(true);
    }

    useEffect(()=>{
        setIsScrollingEnabled(false)
    }, [])

    
    return (
        <>
            <div className='modal-bg'  onClick={() => setIsModalOpen(false)} >
            </div>
            <div className='modal-contered' >
                <div className='modal-body' onClick={() => 1}>
                <Image src={successComent}/>
                <h2> Дякуємо!</h2>
                <p>Ми візьмемо до уваги Вашу пропозицію</p>
                <button className='btn secondary' onClick={() => handleSubmit()}>Закрити</button>
                </div>

            </div>

        </>

        
      );
}

// Modal.propsTypes = {

// };

// Modal.defaultProps = {
    
     
// };

export default Modal