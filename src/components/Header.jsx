import logo from '../assets/img/logo.jpeg'
import '../assets/styles/header.css'
function Header() {
    return (
        <header>
            <img src={logo}></img>
            <h1>BookArt</h1>
        </header>
    )
}
export default Header;