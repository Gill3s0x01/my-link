import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menuContainer">
      <div className="menuItem">
        <a
          className="socialLink"
          href="https://www.youtube.com/channel/UCJWCecuSUa9CsNQ4MGJ_g3A"
        >
          <BsYoutube className="menuItemIcon" />
        </a>
        <a
          className="socialLink"
          href="https://www.instagram.com/air400.armorer/"
        >
          <BsInstagram className="menuItemIcon" />
        </a>
        <Link className="menuButton" to="/links">
          Meus Links
        </Link>
      </div>
    </div>
  )
}
