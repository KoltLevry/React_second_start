import Button from '../Button/Button';
import "./styles.css";

import {lessonData} from './data';

function LessonCard() {

    console.log(lessonData);

    return (
        <div className="lesson_card-wrapper">
            <img src={lessonData.lesson_img} />
            <h1>LessonCard {lessonData.lesson_number} </h1>
            <div>Theme: {lessonData.topic}</div>
            <div>{lessonData.teacher_name}: Teacher</div>
            <Button />
        </div>
    )
}

export default LessonCard;