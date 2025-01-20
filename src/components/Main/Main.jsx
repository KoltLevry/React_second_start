// import { Routes, Route } from "react-router-dom";
// import Lesson_02 from "../lessons/Lesson_02/Lesson_02";
import './Main.css';
import { useState } from "react";

function Main(props) {

    const [ clickCount, setClickCount ] = useState(0);

    return(
        <main className='main'>
            <p>Hi! Welcome!</p>
            <p>Current count: {clickCount}</p>
            <button onClick={() => setClickCount(clickCount + 1)}>
                Increment
            </button>
            <div>How / Who are you? - {props.text}</div>
        </main>
    );
}

export default Main;