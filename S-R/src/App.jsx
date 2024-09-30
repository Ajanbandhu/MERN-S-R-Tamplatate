import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from './Pages/HomePages';
import ContactPage from './Pages/ContactPage';
import AboutPages from './Pages/AboutPages';
import ServicesPage from './Pages/ServicesPage';
import PortfolioPages from './Pages/PortfolioPages';



function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages/>} />
        <Route path="/Home" element={<HomePages/>} />
        <Route path="/Services" element={<ServicesPage/>} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Portfolio" element={<PortfolioPages />} />
        <Route path="/About" element={<AboutPages />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
