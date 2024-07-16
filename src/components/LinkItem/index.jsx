import { FiClipboard, FiX } from 'react-icons/fi'
import styles from './LinkItem.module.css'

export default function LinkItem() {
  return (
    <div className={ styles.modal_container }>
      <div className={ styles.modal_header }>
        <h2>Link encurtado</h2>
        <FiX size={28} />
      </div>
      <span>https://open.spotify.com/collection/tracks</span>
      <button title='Copiar'>
        https://open.spotify.com
        <FiClipboard />
      </button>
    </div>
  )
}