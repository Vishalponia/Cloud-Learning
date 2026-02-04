
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navabar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Courses from './pages/Courses.jsx'
import ContactUs from './pages/ContactUs.jsx'
import SelfLearning from "./pages/Selflearning.jsx";
import AdminContacts from "./pages/AdminContacts.jsx";
function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Selflearning" element={<SelfLearning />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
