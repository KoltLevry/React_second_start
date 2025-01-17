
import "./App.css";
import Xapp from './components/x_try_react/Xapp'; // Імпортуємо компонент
import { logMessage } from "./components/loghelper/Loghelper";

function App() {
  logMessage(); // Викликаємо утилітну функцію
  return (
  <div className="app">
    <h1>Hello, React</h1>
    <Xapp />  {/* Використовуємо компонент */}
  </div>
  );
}

export default App;
