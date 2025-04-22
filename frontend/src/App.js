import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home'
import AboutUs from './pages/About/about';
import ContactUs from './pages/Contact/contact';
import Navbar from './components/Navbar/NavBar'
import Footer from "./components/Footer/index"
import LoginForm from './pages/Login/login';
import SignupForm from './pages/SignUp/signup';
import './App.css';


function App() {
  return (

        <Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/login" element={<LoginForm />} />
<Route path="/signup" element={<SignupForm/>} />
</Routes>
<Footer/>
</Router>


   

  );
}

export default App;
