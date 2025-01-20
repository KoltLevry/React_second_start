import './SideBar.css';
// import { FaArrowUp, FaCoffee} from "react-icons/fa";
import { useState } from 'react';

function SideBar() {
    const [activeTab, setActiveTab] = useState('lessons');

    const lessons = Array.from({ length: 20 }, (_, i) => `Lesson ${i + 2}`);
    const homeworks = Array.from({ length: 20 }, (_, i) => `Homework ${i + 2}`);

    return (
        <aside className="sidebar">
            <h4>Select the project below</h4>
            {/* <FaArrowUp size={40} color='green' className='sidebar-arrow' /> */}
            {/* <FaCoffee size={40} color='green' /> */}
            <div className="tab-buttons">
                <button
                    className={`tab-button ${activeTab === 'lessons' ? 'active' : ''}`}
                    onClick={() => setActiveTab('lessons')}
                >
                    Lessons
                </button>
                <button
                    className={`tab-button ${activeTab === 'homeworks' ? 'active' : ''}`}
                    onClick={() => setActiveTab('homeworks')}
                >
                    Homeworks
                </button>
            </div>
            <nav className='nav'>
                <ul>
                    {activeTab === 'lessons' &&
                        lessons.map((lesson, index) => <li key={index}>{lesson}</li>)}
                    {activeTab === 'homeworks' &&
                        homeworks.map((hw, index) => <li key={index}>{hw}</li>)}
                </ul>
            </nav>
        </aside>
    );
}

export default SideBar;
