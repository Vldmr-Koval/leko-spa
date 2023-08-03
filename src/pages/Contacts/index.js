import Map from '../../components/Map'

import { Facebook, Instagram, Youtube} from '../../img'
import {ReactComponent as Phone} from '../../img/form/svg/phone_1.svg';
import {ReactComponent as Place} from '../../img/form/svg/place.svg';
import {ReactComponent as Mail} from '../../img/form/svg/mail.svg';

import  Image from '../../components/ui/Image';
import {line, cars} from '../../img'

import './contacts.scss'

const Contacts = () => {
    

    
    return (
        <>
        <section className='section section-contacts'>

            <div className='container'>
                <Image src={line} className={'section-contacts__line'}/>
                <Image src={cars} className={'section-contacts__cars'}/>
            
                <div className='section-contacts__header'>
                Контакти 
                </div>

                <div className='helper'>
                    <Facebook/> 
                </div>

                <div className='section-contacts__content'>
                    <div className='section-contacts__content_item-1'>
                        <Place width={25} className="contacts_icon"/>
                        <p>Вінниця, вул. Келецька, 102а</p>
                    </div>
                    <div className='section-contacts__content_item-2'>
                        <Phone  width={25} className="contacts_icon"/>
                        <a className='section-contacts__content_link' href="tel:3030">30-30</a>
                    </div>
                    <div className='section-contacts__content_item-3'>
                        <Phone  width={25} className="contacts_icon"/>
                        <a className='section-contacts__content_link' href="tel:= 38 098 0000084">(098) 000-00-84</a>
                        </div>
                    <div className='section-contacts__content_item-4'>
                        <Mail width={25} className="contacts_icon"/>
                        <a className='section-contacts__content_link' href = "mailto:nosha.ua@gmail.com">nosha.ua@gmail.com</a>
                    </div>
                </div>

                <div className='section-contacts__social'>
                    <a href="https://www.facebook.com/nosha.ukraine" target="_blank" rel="noreferrer" title="Facebook">
                        <Facebook  className="icon-hover"/>
                    </a>
                    <a href="https://www.instagram.com/nosha.ua" target="_blank" rel="noreferrer" title="Instagram">
                        <Instagram  className="icon-hover"/>
                    </a>
                    <a href="https://www.instagram.com/nosha.ua" target="_blank" rel="noreferrer" title="Instagram">
                        <Youtube  className="icon-hover"/>
                    </a>
                        
                    
                </div>


            </div>


            

        </section>
        <Map/>
        </>

        
    )
}


export default Contacts

