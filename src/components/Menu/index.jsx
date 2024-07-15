import styles from './Menu.module.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Menu() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li>
          <Link to='/' target='_blank' >
            <FaInstagram color='#fff' />
          </Link>
        </li>
        <li>
          <Link to='/' target='_blank' >
            <FaLinkedin color='#fff' />
          </Link>
        </li>
        <li>
          <Link className={styles.btn_links} to='/links'  >
            Meus Links
          </Link>
        </li>
      </ul>
    </nav>
  )
}