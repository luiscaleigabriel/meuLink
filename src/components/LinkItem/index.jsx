import { FiClipboard, FiX } from 'react-icons/fi'
import styles from './LinkItem.module.css'

export default function LinkItem({ link, closeModal }) {
  return (
    <div className={ styles.modal_container }>
      <div className={ styles.modal_header }>
        <h2>Link encurtado</h2>
        <FiX onClick={closeModal} size={28} />
      </div>
      <span>{ link }</span>
      <button title='Copiar'>
        https://open.spotify.com
        <FiClipboard />
      </button>
    </div>
  )
}