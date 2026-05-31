import './Hero.css'
import HeroImage from '../../../assets/Hero.png' 

function Hero({ onNavigate }) {
  return (
    <>
    <section id="home" className="section">
        <div className="hero-image">
          <img src={HeroImage} alt="Hero Image" id="hero" />
        </div>
        <div className="hero-content">
          <p className="hero-text">
            Empowering you with effortless access to village administrative services.<br />
            Connect with your Grama Niladhari officer and manage your official needs in just a few clicks.</p>
        </div>

        <div className="buttons">
          <button 
            onClick={() => onNavigate('role-selection')} 
            className="btn cursor-pointer" 
            id="login-btn"
          >
            Login
            <img src="login_24dp_F7FAFC_FILL0_wght400_GRAD0_opsz24.svg" alt="login-icon" />
          </button>
          <button 
            onClick={() => onNavigate('register')} 
            className="btn cursor-pointer" 
            id="register-btn"
          >
            Register
            <img src="how_to_reg_24dp_F7FAFC_FILL0_wght400_GRAD0_opsz24.svg" alt="register-icon" />
          </button>
        </div>
    </section>
    </>
    
  )
}

export default Hero