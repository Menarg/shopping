import './Product.css';

function Product (props) {
    
    const { title, description, price, img, brand, key, setAmount, amount } = props; 

    function addToCart() {
        setAmount(amount + 1);
    }

    return (
        <section className='Product'>
            <div className='productContent'>
                <img className='productImg' src={img}></img>
                <h3>{ title }</h3>
                <p>{ brand }</p>
                <p>${ price }</p>
            </div>

            <div className='buttonBox'>
                <button className='CartButton' onClick={addToCart}>Add to Cart</button>
            </div>
        </section>
    );
}

export default Product