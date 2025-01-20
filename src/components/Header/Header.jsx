import './Header.css';
import { FaCoffee } from 'react-icons/fa';

function Header() {
    return( 
        <header className='header'>
            <FaCoffee size={30} color='darkblue'/>
            <p>Hi. This is my project 4.0</p>
        </header>
    );
}

export default Header;