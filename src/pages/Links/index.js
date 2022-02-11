import './links.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'

export default function Links() {
  return (
    <div className="linksContainer">
      <div className="linkHeader">
        <Link to="/">
          <FiArrowLeft className="linkHeaderIcon" />
        </Link>
        <h1>Meus Links</h1>
      </div>
      <div className="linksItem">
        <button className="link">
          <FiLink className="linksItemIcon" />
          www.air400.com.br
        </button>
        <button className="delete">
          <FiTrash className="linksTrashIcon" />
        </button>
      </div>

      <div className="linksItem">
        <button className="link">
          <FiLink className="linksItemIcon" />
          www.air400.com.br
        </button>
        <button className="delete">
          <FiTrash className="linksTrashIcon" />
        </button>
      </div>
    </div>
  )
}
