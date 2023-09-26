import logo from './7.png'
import './Navbar.css'
function Navbar(){
    return(
        <>
        <nav>
        <img src={logo} id='logo' alt='logo'></img>
        <ul id='list-1'>
            <a href='#'><li>Services</li></a> 
            <a href='#'><li>Portfolio</li></a>
            <a href='#'><li>About</li></a>
            <a href='#'><li>Skills</li></a>
        </ul>
        <button id='header-button'>contact us</button>
        </nav>
      
        </>
    )
}
export default Navbar;