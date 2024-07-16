import { Link } from 'react-router-dom'
import './error.css'

function Error() {
  return (
    <div className="error_container">
      <h1>Opse!!! A tela procurada não existe.</h1>
      <img src="/error.png" alt="NotFound" />
      <Link className='btn_error' to='/'>
      Voltar para home 
      </Link>
    </div>
  )
}

export default Error