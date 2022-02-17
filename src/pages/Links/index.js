import './links.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { getLinkSave, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {
  const [myLinks, setMyLinks] = useState([])
  const [data, setData] = useState({})
  const [modal, setModal] = useState(false)

  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    const getLinks = async () => {
      const result = await getLinkSave('@myLinks')

      if (result.length === 0) {
        setEmpty(true)
      }
      setMyLinks(result)
    }
    getLinks()
  }, [])

  const handleOpenLink = (link) => {
    setData(link)
    setModal(true)
  }

  const handleDelete = async (id) => {
    const result = await deleteLink(myLinks, id)
    if (result.length === 0) {
      setEmpty(true)
    }
    return setMyLinks(result)
  }

  return (
    <div className="linksContainer">
      <div className="linkHeader">
        <Link to="/">
          <FiArrowLeft className="linkHeaderIcon" />
        </Link>
        <h1>Meus Links</h1>
      </div>
      {myLinks.map((link) => (
        <div key={link.id} className="linksItem">
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink className="linksItemIcon" />
            {link.long_url}
          </button>
          <button className="delete" onClick={() => handleDelete(link.id)}>
            <FiTrash className="linksTrashIcon" />
          </button>
        </div>
      ))}
      {empty && (
        <div className="empty">
          <h1>Você não possui nenhum link cadastrado</h1>
        </div>
      )}
      {modal && (
        <LinkItem
          closeModal={() => setModal(false)}
          content={data}
          key={data.id}
        />
      )}
    </div>
  )
}
