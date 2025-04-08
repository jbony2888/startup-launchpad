import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home'
import AboutUs from './pages/About/about';
import ContactUs from './pages/Contact/contact';
import Navbar from './components/Navbar/NavBar'
import './App.css';


function App() {
  return (

        <Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
</Routes>
</Router>


   

  );
}

export default App;
