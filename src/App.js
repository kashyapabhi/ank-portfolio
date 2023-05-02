import Header ,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState,useEffect } from "react";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio,setRatio] =useState(window.innerWidth/window.innerHeight);
  console.log(menuOpen);
  console.log(ratio)
  useEffect(() => {
    const resizeRatio =()=>{
      setRatio(window.innerWidth/window.innerHeight)
    };
    window.addEventListener("resize", resizeRatio)
  
    return () => {
        window.removeEventListener("resize",resizeRatio)
    }
  }, [ratio])
  

  return(
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home ratio={ratio}/>
      <Work/>
      <Timeline/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Toaster toastOptions={{
        duration:5000,
      }}/>

    </>
  )
}

export default App;