
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
import Contacts from "./pages/admin/Contacts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import  FreeCourses from "./pages/FreeCourses.jsx";
import Register from "./pages/Regisater.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
 

  return (
    <>
     <Navbar/>
      <ScrollToTop />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route
  path="/free-courses"
  element={
    <ProtectedRoute>
      <FreeCourses />
    </ProtectedRoute>
  }
/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Selflearning" element={<SelfLearning />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
