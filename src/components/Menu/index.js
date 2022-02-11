import './menu.css'
import { FiLink } from 'react-icons/fi'

export default function Menu() {
  return (
    <div className="menuContainer">
      <div className="menuItem">
        <button className="menuButton">
          <FiLink className="menuItemIcon" />
          Links
        </button>
      </div>
    </div>
  )
}
