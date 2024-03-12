import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { useState, useEffect } from 'react';

function App() {
  const [amount, setAmount] = useState(0);

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    }
  
    if (Products.length === 0) {
      fetchData();
    } else {console.log(error)};
  }, []); // körs bara vid sidladdning

  const ProductComponents = Products.map((product) => {
    return <Product title = {product.title} description = {product.description} key = {product.id} setAmount = {setAmount} amount = {amount} />
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
