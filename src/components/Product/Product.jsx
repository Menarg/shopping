import { useNavigate } from 'react-router-dom';
import './Product.css';
import CartButton from './CartButton';

function Product (props) {
    const navigate = useNavigate();
    const product = props;
    console.log(product);
    

    function handleNavigate () {
        navigate(`/ProductDetails/${product.title}`, { state: { product } });
    }

    return (
        <section className='Product'>
            <div className='productContent' onClick={handleNavigate}>
                <img className='productImg' src={product.images[0]}></img>
                <h3>{ product.title }</h3>
                <p>{ product.brand }</p>
                <p>${ product.price }</p>
            </div>

            <CartButton product={props} />
        </section>
    );
}

export default Product