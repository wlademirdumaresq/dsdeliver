import './styles.css';
import { ReactComponent as Yt } from './Youtube.svg';
import { ReactComponent as Lk } from './Linkedin.svg';
import { ReactComponent as Ins } from './Instagram.svg';

function Footer() {
    return (
        <>
            <footer className="main-footer">
                App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="#" target="_new"> <Yt /> </a>
                <a href="#" target="_new"> <Lk /> </a>
                <a href="#" target="_new"> <Ins /> </a>
            </div>
            </footer>
        </>
    )
}

export default Footer;