import { TypeAnimation } from 'react-type-animation';
import LogoFalling from "./logofalling";
import '../common.css';

const Nav = () => {
    return (
        <nav id="nav" data-aos="fade-in" className="aos-init aos-animate">
            <div className="nav-main-container">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <a href="#projects" className="link"><i className="fas fa-code"></i> Projects</a>
                    </li>
                    <li className="nav-li">
                    <a href="#skills" className="link"><i className="fas fa-tools"></i> Skills</a>
                    </li>
                    <li className="nav-li">
                    <a href="#education" className="link"><i className="fas fa-user-graduate"></i> Education</a>
                    </li>
                    <li className="nav-li">
                    <a href="#contact" className="link"><i className="fas fa-envelope"></i> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Nav;
