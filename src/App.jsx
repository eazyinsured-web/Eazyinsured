import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from './Pages/Home/Index';
import TermsUse from './Pages/TermsUse';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ServiceDesc from './Pages/ServiceDesc';
import NitinGrowthDesk from './Pages/NitinGrowthDesk';
import NitinGrowthDeskPrivacy from './Pages/NitinGrowthDeskPrivacy';
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
        <Route path="/nitin-growth-desk" element={<NitinGrowthDesk />} />
        <Route path="/nitin-growth-desk/privacy" element={<NitinGrowthDeskPrivacy />} />
      </Routes>
      {/* Vercel Analytics - Track page views and user interactions */}
      <Analytics 
        mode={process.env.NODE_ENV === 'development' ? 'development' : 'production'}
        debug={process.env.NODE_ENV === 'development'}
      />
      {/* Vercel Speed Insights - Monitor Core Web Vitals */}
      <SpeedInsights />
    </Router>
  );
}

export default App;
