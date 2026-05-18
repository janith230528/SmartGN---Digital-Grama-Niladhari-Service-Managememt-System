import './NavTabs.css'

function NavTabs() {
  return (
    <><div className="nav-tabs-container">
      <a href="#home" className="nav-link"><img src="home_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="homeicon" className="icons" />Home</a>
      <a href="#about" className="nav-link"><img src="info_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="abouticon" className="icons" />About</a>
      <a href="#services" className="nav-link"><img src="accessibility_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="servicesicon" className="icons" />Services</a>
    </div>

    <div className="nav-tabs-container-hidden">
     <img src="menu_24dp_2D3748_FILL0_wght400_GRAD0_opsz24.svg" alt="servicesicon" className="icons nav-link" id="menu-icon" />
    </div>
    </>
  )
}

export default NavTabs

