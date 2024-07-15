import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu'

function Home() {
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
            placeholder='Cole seu link aqui!'
          />
        </label>

        <button>Gerar Link</button>
      </div>

      <Menu />
    </div>
  )
}

export default Home