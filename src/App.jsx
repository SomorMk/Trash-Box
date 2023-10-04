import About from "./assets/Components/About/About"
import Banner from "./assets/Components/Banner/Banner"
import CliantSlider from "./assets/Components/Cliant-Slider/CliantSlider"
import Navbar from "./assets/Components/Navbar/Navbar"
import Service from "./assets/Components/Service/Service"
import Work from "./assets/Components/Work/Work"
import Products from "./assets/Components/Products/Products"
import Founder from "./assets/Components/Founder/Founder"
import Feedback from "./assets/Components/Feedback/Feedback"
import Newsletter from "./assets/Components/Newsletter/Newsletter"
import Contact from "./assets/Components/Contact/Contact"
import Footer from "./assets/Components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Work></Work>
      <CliantSlider></CliantSlider>
      <Service></Service>
      <About></About>
      <Products></Products>
      <Founder></Founder>
      <Feedback></Feedback>
      <Newsletter></Newsletter>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
