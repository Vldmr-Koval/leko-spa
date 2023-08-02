import { NavLink } from "react-router-dom";

import Image from '../ui/Image'
import Button from '../ui/Button'
import {logoDark} from '../../img'
import ScrollToTop from '../../components/ScrollToTop'
import NavBar from '../../components/Nav/NavBar'


import './header.scss'

const Header = () => {
    
    return (
        <header className="header-section container">
            <ScrollToTop />

            <NavLink className="logo" to={`/`}>    
                <Image src={logoDark} width={117} heigth={58} className={"logo_image"}/>  
            </NavLink> 
            <NavBar/>          
            <Button className="secondary btn-header">Call</Button>
            
        </header>
       
    )
}


export default Header