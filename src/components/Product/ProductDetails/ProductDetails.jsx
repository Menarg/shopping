import Header from "../../Header/Header";
import CartButton from "../CartButton";
import { useLocation } from 'react-router-dom';
import './ProductDetails.css'

function ProductDetails() {
    const location = useLocation();
    const { product } = location.state || {}; // Destructure `product` from state
    
    return (
        <div className="wrap">
            <Header />
            <section className="ProductDetails">
                <section className="image">
                    <img aria-label="" src={product.images[0]}/>
                </section>
                <section className="info">
                    <h1>{product.title}</h1>
                    <h2>{product.brand}</h2>
                    <p>{product.description}</p>
                    <p>{product.minimumOrderQuantity} per purchase, {product.shippingInformation}</p>
                    <p>${product.price}</p>
                    <p>{product.discountPercentage}% off!</p>
                    <p>{product.stock} in stock</p>
                    <br></br>
                    <CartButton />
                </section>
            </section>
            <section className="reviews">
                <h3>Reviews</h3>
                <div>
                    <p>{product.reviews[0].rating}</p>
                    <p>{product.reviews[0].comment}</p>
                    <p>{product.reviews[0].date}</p>
                </div>
                <div>
                    <p>{product.reviews[1].rating}</p>
                    <p>{product.reviews[1].comment}</p>
                    <p>{product.reviews[1].date}</p>
                </div>
                <div>
                    <p>{product.reviews[2].rating}</p>
                    <p>{product.reviews[2].comment}</p>
                    <p>{product.reviews[2].date}</p>
                </div>
            </section>    
        </div>
    )

}

export default ProductDetails;