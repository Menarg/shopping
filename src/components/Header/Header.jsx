import './Header.css'
import Logo from '../../assets/logo.png'
import Cart from '../Cart/Cart'

function Header () {

    return (
        <header>
            <img src={Logo} />

            <Cart />
        </header>
    )
}

export default Header