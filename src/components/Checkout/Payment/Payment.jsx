import { useNavigate } from 'react-router-dom';
import './Payment.css';
import { useState } from 'react';
import { useCart } from '../../../context/ProductContext';

function Payment() {
    const { setCart } = useCart();
    const navigate = useNavigate();
    const [PaymentVisible, setPaymentVisible] = useState('');
    const [ConfirmationVisible, setConfirmationVisible] = useState('hidden');

    // Toggle the isActive state
    const confirmPurchase = () => {
        setPaymentVisible('hidden');
        setConfirmationVisible('');
        // try to empty cart (not working)
    };

    function goBack () {
        navigate(`/`);
        try {
            if (localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
                setCart([])
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <section>
            <section className={`payment ${PaymentVisible}`}>
                <h2>Payment options:</h2>
                <form className="payment-form">
                    <div className="form">
                        <label htmlFor="card-number">Card Number</label>
                        <input type="text" id="card-number" placeholder="1234 5678 9876 5432" required />
                    </div>
                    <div className="form">
                        <label htmlFor="expiry-date">Expiry Date</label>
                        <input type="text" id="expiry-date" placeholder="MM/YY" required />
                    </div>
                    <div className="form">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" placeholder="123" required />
                    </div>
                    <div className="form">
                        <label htmlFor="name">Cardholders Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>
                    <div className="form">
                        <label htmlFor="billing-address">Billing Address</label>
                        <input type="text" id="billing-address" placeholder="123 Main St, City, Country" required />
                    </div>
                    <div className="form">
                        <button type="submit" className="pay-button" onClick={confirmPurchase}>Pay Now</button>
                    </div>
                </form>
            </section>
            <section className={`payment ${ConfirmationVisible}`}>
                <h3>Your order has been sent</h3>
                <h2>Thank you for your purchase</h2>

                <button className='confirmationButton' onClick={goBack}>Go Back</button>
            </section>
        </section>
    )

}

export default Payment