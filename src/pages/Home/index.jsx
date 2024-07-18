import { FiLink } from 'react-icons/fi'
import { useState } from 'react'
import Menu from '../../components/Menu'
import './home.css'
import LinkItem from '../../components/LinkItem'

function Home() {
  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)

  function shortLink() {
    setShowModal(true)
  }

  return (
    <div className="container_home">
      <div className="logo">
        <img src="/principal.png" alt="LinkSnipper" />
        <h1>LinkSnipper</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>
      
      <div className="are-input">
        <label htmlFor='link'>
          <FiLink size={24} color='#fff' />
          <input 
            type="text"
            id='link'
            value={ link }
            placeholder='Cole seu link aqui!'
            onChange={ (e) => setLink(e.target.value) }
          />
        </label>

        <button onClick={ shortLink }>Gerar Link</button>
      </div>

      <Menu />

      { showModal && (  
        <LinkItem link={ link } closeModal={ () => setShowModal(false) } />
      ) }
      
    </div>
  )
}

export default Home