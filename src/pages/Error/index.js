import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './error.css'

export default function Error() {
  return (
    <div className="containerError">
      <Link to="/">
        <FiArrowLeft className="linkHeaderIcon" />
      </Link>
      <div className="logo">
        <img src="/notfound.png" alt="404" />
        <h1>My Link</h1>
        <span>😔 Ocorreu um erro ao gerar o link 😔</span>
      </div>
    </div>
  )
}
