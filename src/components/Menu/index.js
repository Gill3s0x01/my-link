import './menu.css'
import { BsYoutube, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menuContainer">
      <div className="menuItem">
        <a
          className="socialLink"
          href="https://www.youtube.com/channel/UC5g3po-qfrxfuHoeJHnqYHQ"
        >
          <BsYoutube className="menuItemIcon" />
        </a>
        <a className="socialLink" href="https://github.com/Gilles30">
          <BsGithub className="menuItemIcon" />
        </a>
        <Link className="menuButton" to="/links">
          Meus Links
        </Link>
      </div>
    </div>
  )
}
