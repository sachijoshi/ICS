import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Mandirs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <BookingForm />
              <Footer />
            </>
          }
        />
        {/* Contact / Mandirs Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
