import './Product.css';

function Product (props) {

    // console.log(Products.title);
    const { title, description, setAmount, amount } = props; 

    function handleClick() {
        setAmount(amount + 1);
    }

    return (
        <section className='Product'>
            <h2>{ title }</h2>
            <p>{ description }</p>
            <button className='CartButton' onClick={handleClick}>Add to Cart</button>
        </section>
    );
}

export default Product