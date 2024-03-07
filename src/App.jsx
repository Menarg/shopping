import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);

  const [Products, setProducts] = useState([
    { title: 'Help' , id: '1' },
    { title: 'Skibidiboop' , id: '2' },
    { title: 'The Benefits of gaming' , id: '3' },
    { title: 'How to beome a God' , id: '4' },
    { title: 'Dragons, how to court them and immortality' , id: '5' },
  ]);

  const ProductComponents = Products.map((product) => {
    return <Product title = {product.title} key = {product.id} setAmount = {setAmount} amount = {amount} />
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
