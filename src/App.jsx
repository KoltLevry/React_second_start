import "./App.css";
// import "./components/Button/styles.css";
import Xapp from './components/x_try_react/Xapp'; // Імпортуємо компонент
// import  mButton from './components/Button/Button'; 
// import MyButton from './components/Button/Button'; 
import Lesson_02 from './lessons/Lesson_02/Lesson_02'; 
import LessonCard from '././components/LessonCard/LessonCard';
import { logMessage } from "./components/loghelper/Loghelper";

function App() {
  logMessage(); // Викликаємо утилітну функцію
  return (
    <div className="app">
      <h1>Hello, React</h1>
      <Xapp />  
      <Lesson_02 />
      <LessonCard />
    </div>
  );
}

export default App;
