// import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    // <Router>
      <div className="app">
        <Header />
        <div className='container'>
          <SideBar />
          <Main />
        </div>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
