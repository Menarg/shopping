import './Cart.css';

function Cart (props) {
    
    return (
        <div>
            <section>
                <h3>Cart</h3>
                <h3 className='CartNumber'>{props.amount}</h3>
            </section>
        </div>
    )
}

export default Cart