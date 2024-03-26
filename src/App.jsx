import * as  React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from "./components/footer/footer.jsx";
import Home from './components/Pages/Home/Home.jsx';
import Calculator from './components/Pages/Calculator/Calculator.jsx';
import About from './components/Pages/About/about.jsx';
import Login from './components/Login/login.jsx'
import Singin from "./components/Pages/Singin/Singin.jsx";
import Dashboard from "./components/Pages/Workplace/Workplace.jsx";


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/singin" element={<Singin/>} />
                <Route path="/d" element={<Dashboard/>} />
            </Routes>
             <Footer/>
        </Router>
    )
}
export default App;