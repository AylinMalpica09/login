import '../assets/styles/Footer.css'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
import linkedin from '../assets/img/linkedin.png'
function Footer() {
    return (
        <footer>
            <section>
                <div>
                    <p>Aylin Venturina Malpica Muñiz</p>
                    <p>213365</p>
                    <p>Programacion Web</p>
                </div>
                <img src={facebook} className='img-footer'></img>
                <img src={instagram} className='img-footer'></img>
                <img src={linkedin} className='img-footer'></img>
            </section>
        </footer>
    )
}
export default Footer;