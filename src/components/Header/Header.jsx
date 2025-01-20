import './Header.css';
import { FaCoffee, FaSun, FaStar, FaSmileWink } from 'react-icons/fa';

function Header() {
    return( 
        <header className='header'>
            <div className='header-logo'>
                <FaSun size={30} color='darkblue'/>
                <FaSmileWink size={30} color='darkblue'/>
                <FaStar size={30} color='darkblue'/>
            </div>
            <div className='header-greeting'>
                <FaCoffee size={30} color='darkblue'/>
                <p>Hi. This is my project 4.0</p>
            </div>
            <div className='header-nav'>
                <ul>
                    <li>Home</li>
                    <li>Contacts</li>
                    <li>Games</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;