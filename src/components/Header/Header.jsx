import './Header.css'
import Logo from '../../assets/logo.png'
import Cart from '../Cart/Cart'
import { useNavigate } from 'react-router-dom';

function Header (props) {
    const navigate = useNavigate();

    function handleNavigate () {
        navigate(`/Checkout`);
    }
    
    return (
        <header>
            <img src={Logo} />
            <h2 className='heading'>Company X</h2>
            <div className='checkout' onClick={handleNavigate}>
                <Cart amount = {props.cartamount} />
            </div>
        </header>
    )
}

export default Header