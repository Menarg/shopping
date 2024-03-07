import './Cart.css';

function Cart (props) {

    return (
        <section>
            <h3>Cart</h3>
            <h3 className='CartNumber'>{props.cartamount}</h3>
        </section>
    )
}

export default Cart