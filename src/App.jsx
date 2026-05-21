import Hero from "./Components/Landing-page/Hero/Hero.jsx";
import Navbar from "./Components/Landing-page/Navbar/Navbar.jsx";
import Services from "./Components/Landing-page/Services/Services.jsx";

function App() {
  return (
    <>
    <div className= "App">
      <Navbar />
      <Hero />
      <hr/>
      <Services />
      </div>
    </>
  )
}

export default App;