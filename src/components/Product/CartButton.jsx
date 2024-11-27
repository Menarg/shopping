import { useEffect } from "react";
import { useCart } from "../../context/ProductContext";


function CartButton({ product }){
    const { cart, setCart } = useCart();

    //gets current cart
    useEffect(() => {
        try {
          localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
          console.log(error);
        }
    }, [cart]);

    function addToCart() {
        // Add the product to the cart
        setCart((prevCart) => [...prevCart, product]);
    }

    return ( 
        <div className='buttonBox'>
            <button className='CartButton' onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default CartButton;