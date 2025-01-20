import { Link } from "react-router-dom";
import './SideBar.css';

function SideBar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/Lesson_02">Lesson 2</Link></li>
                </ul>
            </nav>
        </aside>
    );
}
    
    export default SideBar;