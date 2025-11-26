import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import UmrahPackages from "./pages/UmrahPackages";
import Services from './pages/Services'
import Flights from './pages/Flights'
import Contact from './pages/Contact'
import HolidayPackages from "./pages/HolidayPackages";
import CorporateTravel from "./pages/CorporateTravel";
import NewVisaOffers from "./pages/Newvisaoffers";
import DocumentAttestation from "./pages/DocumentAttestation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-primary-dark text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/umrah-packages" element={<UmrahPackages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/holiday-packages" element={<HolidayPackages />} />
<Route path="/corporate-travel" element={<CorporateTravel />} />
<Route path="/new-visa-offers" element={<NewVisaOffers />} />
<Route path="/document-attestation" element={<DocumentAttestation />} />

          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
