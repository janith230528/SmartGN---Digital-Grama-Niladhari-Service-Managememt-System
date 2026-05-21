import './Logo.css'
import logoImage from '../../../../assets/SmartGN logo/3.png';

function Logo() {
  return (
    <div className="logo-section">
          <img src={logoImage} alt="SmartGN Logo" className="logo" />
    </div>
    )
}

export default Logo