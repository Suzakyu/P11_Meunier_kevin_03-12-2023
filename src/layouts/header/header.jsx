// IMPORTS
import { Link } from 'react-router-dom'

import './header.css'
import Account from '../../components/account/account'

import Logo from '../../assets/img/argentBankLogo.png'



function Header() {
   return (
      <header>
         <nav className='cont-nav'>

            <Link to="/">
               <img className='logo-header' alt='Logo de Argent Bank' src={Logo} />
            </Link>

            <Account />

         </nav>
      </header>
   )
}
 
export default Header;