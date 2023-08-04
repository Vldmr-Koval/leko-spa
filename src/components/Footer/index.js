// import { NavLink } from "react-router-dom";

import Image from '../ui/Image'
import {logoWhite, Facebook, Instagram, Youtube} from '../../img'
import products from '../../pages/Product/products_data'

import './footer.scss'

const Footer = () => {
    
    return (
        <footer className='footer'>
           <div className='container'>
                <div className="footer__wrap">
                     
                    <div className="footer__wrap_top">
                        <Image  
                            className="footer__wrap_top_logo"
                            src={logoWhite} 
                            width={117} 
                            heigth={58}/> 
                        {/* <nav className="footer__wrap_top__nav">
                            <NavLink className="footer__wrap_top__nav_item footer-hover" to={`/`}> Головна </NavLink>
                            <NavLink className="footer__wrap_top__nav_item footer-hover" to={`/packaging`}> Пакування </NavLink>
                            <NavLink className="footer__wrap_top__nav_item footer-hover" to={`/reviews`}> Відгуки </NavLink>
                            <NavLink className="footer__wrap_top__nav_item footer-hover" to={`/contacts`}> Контакти </NavLink>
                        </nav> */}
                        
                    </div>
                    {/* <ul className="footer__wrap_body">
                        {products.map((product)=> {
                        return (
                            <NavLink 
                                className="footer-hover" 
                                to={`/product/${product.name}`}
                                key={product.id}> 
                                
                                <li className="footer__product">{product.textName}</li>
                                
                            </NavLink>
                        )

                        })}
                    </ul> */}

                    <div className="footer__wrap_bot">
                        <div className="footer__wrap_bot_info">
                            <p className="footer__wrap_bot_info_item footer-hover">Політика конфіденційності</p>
                            <p className="footer__wrap_bot_info_item footer-hover">Умови використання</p>
                            <p className="footer__wrap_bot_info_item footer-hover">Мапа сайту</p>
                        </div>
                        <div className="footer__wrap_bot_mail">
                            <a  className="footer__wrap_bot_mail_link" href="mailto:nosha.ua@gmail.com" title="Email">nosha.ua@gmail.com</a>
                        </div>
                        <div className="footer__wrap_bot__social">
                            <a href="https://www.facebook.com/nosha.ukraine" target="_blank" rel="nofollow" title="Facebook">
                                <Facebook  className="icon-hover"/>
                            </a>
                            <a href="https://www.instagram.com/nosha.ua" target="_blank" rel="nofollow" title="Instagram">
                                <Instagram  className="icon-hover"/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCC5Ftu5ixRx0xJKTMYIZB9g" target="_blank" rel="nofollow" title="Youtube">
                                <Youtube className="icon-hover" />
                            </a>
                        </div>
                    </div>
                </div>
           </div>
        </footer>
       
    )
}


export default Footer