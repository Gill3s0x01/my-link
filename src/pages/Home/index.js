import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home() {
  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})

  const handleSubmit = async () => {
    // alert for test in development
    // alert(`Link: ${link}`)
    // setShowModal(true)
    try {
      const response = await api.post('/shorten', {
        long_url: link,
      })
      setData(response.data)
      setShowModal(true)
      saveLink('@myLinks', response.data)
      setLink('')
    } catch (error) {
      alert(`Ops, algo deu errado: ${error}`)
      setLink('')
    }
  }
  return (
    <div className="containerHome">
      <div className="logo">
        <img src="/logo.png" alt="MyLink" />
        <h1>My Link</h1>
        <span>👇 Cole aqui o seu link para encurta-lo 👇</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole aqui o seu link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Gerar link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  )
}
