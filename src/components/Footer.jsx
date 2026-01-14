import f from '../assets/Footer/Image.png'
import f1 from '../assets/Footer/Image-1.png'
import f2 from '../assets/Footer/Image-2.png'

function Footer () {
    return (
        <footer>
        <picture>
            <source media="(min-width: 1200px)" srcSet={f} />
            <source media="(min-width: 800px)" srcSet={f1} />
            <img src={f2} alt="Ourblooms Footer Image" />
        </picture>
        </footer>
    )
}
export default Footer;