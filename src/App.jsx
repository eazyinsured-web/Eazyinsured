import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import TermsUse from './Pages/TermsUse';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ServiceDesc from './Pages/ServiceDesc';
import ScrollToTop from './Components/ScrolltoTop';

function App() {
  return (
    <Router>
         <ScrollToTop/>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/terms-use" element={<TermsUse />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path="/service" element={<ServiceDesc />} />  
      </Routes>
    </Router>
  );
}

export default App;
