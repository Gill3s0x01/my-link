import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './error.css'

export default function Error() {
  return (
    <div className="containerError">
      <Link to="/">
        <FiArrowLeft className="linkHeaderIcon" />
        Voltar para Home
      </Link>
      <div className="logo">
        <img src="/notfound.png" alt="404" />
        <h1>Pagina não encontrada</h1>
        <span>😔OOOPPSS!!!! Ocorreu um erro 😔</span>
      </div>
    </div>
  )
}
