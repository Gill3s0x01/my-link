import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu'

export default function Home() {
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
          <input type="text" placeholder="Cole aqui o seu link" />
        </div>
        <button>Gerar link</button>
      </div>
      <Menu />
    </div>
  )
}
