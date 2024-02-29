import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {

  return (
    <>
      <Header />
      <section className='ProductPage'>
        <Product book='Help' />
        <Product />
        <Product />
        <Product />
      </section>
    </>
  )
}

export default App
