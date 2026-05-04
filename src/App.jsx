import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Symptoms from './pages/Symptoms'
import Patients from './pages/Patients'
import PatientPaperwork from './pages/PatientPaperwork'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Scheduler from './pages/Scheduler'
import LocationDetail from './pages/LocationDetail'
import BackPain from './pages/symptoms/BackPain'
import Headaches from './pages/symptoms/Headaches'
import NeckPain from './pages/symptoms/NeckPain'
import Sciatica from './pages/symptoms/Sciatica'
import Scoliosis from './pages/symptoms/Scoliosis'
import DiscInjury from './pages/symptoms/DiscInjury'
import Whiplash from './pages/symptoms/Whiplash'
import WorkInjury from './pages/symptoms/WorkInjury'
import ArmLegPain from './pages/symptoms/ArmLegPain'
import CarpalTunnel from './pages/symptoms/CarpalTunnel'
import ShoulderPain from './pages/symptoms/ShoulderPain'
import Kids from './pages/symptoms/Kids'
import Pregnancy from './pages/symptoms/Pregnancy'
import Wellness from './pages/symptoms/Wellness'
import Vertigo from './pages/symptoms/Vertigo'
import YourFirstVisit from './pages/YourFirstVisit'
import SpecialOffer from './pages/SpecialOffer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/symptoms/back-pain" element={<BackPain />} />
          <Route path="/symptoms/headaches" element={<Headaches />} />
          <Route path="/symptoms/neck-pain" element={<NeckPain />} />
          <Route path="/symptoms/sciatica" element={<Sciatica />} />
          <Route path="/symptoms/scoliosis" element={<Scoliosis />} />
          <Route path="/symptoms/disc-injury" element={<DiscInjury />} />
          <Route path="/symptoms/whiplash" element={<Whiplash />} />
          <Route path="/symptoms/work-injury" element={<WorkInjury />} />
          <Route path="/symptoms/arm-leg-pain" element={<ArmLegPain />} />
          <Route path="/symptoms/carpal-tunnel" element={<CarpalTunnel />} />
          <Route path="/symptoms/shoulder-pain" element={<ShoulderPain />} />
          <Route path="/symptoms/children" element={<Kids />} />
          <Route path="/symptoms/kids" element={<Kids />} />
          <Route path="/symptoms/pregnancy" element={<Pregnancy />} />
          <Route path="/symptoms/wellness" element={<Wellness />} />
          <Route path="/symptoms/vertigo" element={<Vertigo />} />
          <Route path="/chiropractic-care-kids" element={<Kids />} />
          <Route path="/symptoms/:slug" element={<Symptoms />} />
          <Route path="/your-first-visit" element={<YourFirstVisit />} />
          <Route path="/special" element={<SpecialOffer />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/paperwork" element={<PatientPaperwork />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/merrillville" element={<LocationDetail locationKey="merrillville" />} />
          <Route path="/crown-point" element={<LocationDetail locationKey="crownPoint" />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/scheduler/:locationKey" element={<Scheduler />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
