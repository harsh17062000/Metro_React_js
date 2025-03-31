import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Signup from "./Signup"
import Navbar from "./Navbar"
import Contact from "./Contact"
import MetroReservation from "./Reservation"
import Dashboard from "./Dashboard"
import KitchenSinkExample from "./Card"
import ImgOverlayExample from "./Red"
import Blue from "./Blue"
import Yellow from "./Yellow"







function App() {

  let local = useLocation()

  let auth = local.pathname === '/signup' || local.pathname === '/login'
  return (
    <>
      {!auth && <Navbar />}

      <Routes>
        <Route index element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reserve" element={<MetroReservation />} />
        <Route path="/kitchenSinkExample" element={<KitchenSinkExample />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/imgOverlayExample" element={<ImgOverlayExample />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/yellow" element={<Yellow />} />
      </Routes>

      {!auth && <Footer />}
    </>
  );
}

export default App
