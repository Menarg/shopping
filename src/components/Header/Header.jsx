import './Header.css'
import Logo from '../../assets/logo.png'
import Cart from '../Cart/Cart'

function Header (props) {

    return (
        <header>
            <img src={Logo} />
            <Cart cartamount = {props.cartamount}/>
        </header>
    )
}

export default Header