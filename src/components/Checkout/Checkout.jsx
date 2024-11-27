import Product from "../Product/Product";
import { useCart } from "../../context/ProductContext";
import './Checkout.css'

function Checkout() {
    const { cart } = useCart();
    console.log(cart);
    

    const ProductComponents = cart.map((product) => {
        if (!product || Object.keys(product).length === 0) {
          console.log("Empty or invalid product:", product); // Debugging empty objects
          return null;
        }
        return <Product key={product.id} {...product} />;
    });

    return(
        <section>
            <h2>Your Cart holds:</h2>
            <section className="cart">
                {ProductComponents}
            </section>
        </section>
    )
}

export default Checkout