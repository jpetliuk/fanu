import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Releases from "./components/Releases";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
   return (
      <div className="">
         <Hero />
         <Releases />
         <About />
         <Clients />
         <Contact />
         <Footer />
      </div>
   );
}
export default App;
