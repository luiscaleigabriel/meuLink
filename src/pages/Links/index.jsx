import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import './links.css'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div className="links_contain">
      <div className="links_header">
        <Link to='/'>
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus Links</h1>
      </div>
      <div className="links_item">
        <button className='link'>
          <FiLink size={18} color='#fff' />
          https://github.com/luiscaleigabriel/loja_LGPJ_com_php_puro
        </button>
        <button className='link_delete'>
          <FiTrash size={18} color='#ff5454' />
        </button>
      </div>
      <div className="links_item">
        <button className='link'>
          <FiLink size={18} color='#fff' />
          https://github.com/luiscaleigabriel/loja_LGPJ_com_php_puro
        </button>
        <button className='link_delete'>
          <FiTrash size={18} color='#ff5454' />
        </button>
      </div>
    </div>
  )
}

export default Links