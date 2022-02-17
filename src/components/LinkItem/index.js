import './linkItem.css'

import { FiClipboard, FiX } from 'react-icons/fi'

export default function LinkItem({ closeModal, content }) {
  const copyLink = async () => {
    await navigator.clipboard.writeText(content.link)
    alert('Link copiado!')
  }
  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <h2>Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>
      <span>{content.long_url}</span>
      <button className="shortURL" onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  )
}
