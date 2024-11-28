import { useCart } from "../../context/ProductContext";
import BackButton from "../BackButton/BackButton";
import CartList from "./CartList/CartList";
import './Checkout.css'
import Payment from "./Payment/Payment";

function Checkout() {
    const { cart } = useCart();

    const CartComponents = cart.map((product) => {
        if (!product || Object.keys(product).length === 0) {
          console.log("Empty or invalid product:", product); // Debugging empty objects
          return null;
        }
        return <CartList key={product.id} {...product} />;
    });

    const totalPrice = cart.reduce((accumulator, product) => {
        // Check if the product is invalid or empty
        if (!product || Object.keys(product).length === 0) {
            // console.log("Empty or invalid product:", product);
            return accumulator;
        }
        
        // Ensure product.price is a valid number and parse it
        const price = parseFloat(product.price);
        if (isNaN(price)) {
            return accumulator; // Skip invalid price
        }
        
        // Accumulate the total price, round it and divide to get 2 decimals
        const rounding = Math.round((accumulator + price) * 100) / 100;
        return rounding;
    }, 0);

    return(
        <section className="checkoutWrap">
            <BackButton />
            <section className="cart">
                <h2>Your Cart holds:</h2>
                <section className="cartItems">
                    {CartComponents}
                </section>
                <h3>Total cost: ${totalPrice}</h3>

            </section>
            <section className="payment">
                <Payment price={totalPrice} />
            </section>
        </section>
    )
}

export default Checkout