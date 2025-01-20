// import { Link } from "react-router-dom";
import './SideBar.css';
import { FaArrowDown } from "react-icons/fa";

function SideBar() {
    return (
        <aside className="sidebar">
            <h4>Select the project bellow </h4>
            <FaArrowDown size={40} color='green'className='sidebar-arrow'/>
            <nav className='nav'>
                <ul>
                    <li>Lessons</li>
                    <li>L 2</li>
                    <li>L 3</li>
                    <li>L 4</li>
                    <li>L 5</li>
                    <li>Lesson 6</li>
                    <li>Lesson 7</li>
                    <li>Lesson 8</li>
                    <li>Lesson 9</li>
                    <li>Lesson 10</li>
                    <li>Lesson 11</li>
                    <li>Lesson 12</li>
                </ul>
                <ul>
                    <li>Homeworks</li>
                    <li>Hw 2</li>
                    <li>Hw 3</li>
                    <li>Hw 4</li>
                    <li>Hw 5</li>
                    <li>Hw 6</li>
                    <li>Hw 7</li>
                    <li>Hw 8</li>
                    <li>Hw 9</li>
                    <li>Hw 10</li>
                    <li>Hw 11</li>
                    <li>Hw 12</li>
                </ul>
            </nav>
        </aside>
    );
}
    
    export default SideBar;