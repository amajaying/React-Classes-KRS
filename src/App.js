import './App.css';
import { Route } from 'react-router';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Courses from './Components/courses/Courses';
import { Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App poppins-font -z-30 text-[#3d3d3d]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="#contact" element={<Footer/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer />
     
    </div>
  );
}

export default App;
