import './CartList.css'

function CartList (props){
    const product = props;

    return (
        <div className='list'>
            <img className='productImg' src={product.images[0]}></img>
            <h3>{ product.title }</h3>
            <p>{ product.brand }</p>
            <p>${ product.price }</p>
        </div>
    )
}

export default CartList