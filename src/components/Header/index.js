import { NavLink } from "react-router-dom";
import './header.scss'

const Header = () => {
    
    return (
        <>
            <h2>Header text</h2>
            <NavLink to={`/`}> main </NavLink>
            <NavLink to={`/testing`}> TestingPage </NavLink>
            <NavLink to={`/packaging`}> Packaging </NavLink>
            <NavLink to={`/contacts`}> contacts </NavLink>
            
        </>
       
    )
}


export default Header