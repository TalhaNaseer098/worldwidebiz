import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Process from './components/Process'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="hero-about-wrap">
          <Hero />
          <About />
        </div>
        <Services />
        <TechStack />
        <Process />
        <Packages />
        <FAQ />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
