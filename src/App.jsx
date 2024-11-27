import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { useState, useEffect } from 'react';
import { useCart } from './context/ProductContext';

function App() {
  const [amount, setAmount] = useState();
  const [products, setProducts] = useState([]);
  const { cart } = useCart();
  
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.log(error);
    }
    setAmount(cart.length)
  }, [cart]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    }

    fetchData();
  }, []); // This effect runs only once when the component mounts

  const ProductComponents = products.map((product) => {
    return <Product key = {product.id} {...product} />
  });

  return (
    <>
      <Header cartamount = {amount}/>
      <section className='ProductPage'>
        { ProductComponents }
      </section>
    </>
  )
}

export default App
