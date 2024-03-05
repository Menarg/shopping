import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {

  const Products = [
    { title: 'Help' , id: 1 },
    { title: 'Skibidiboop' , id: 2 },
    { title: 'The Benefits of gaming' , id: 3 },
    { title: 'How to beome a God' , id: 4 },
    { title: 'Dragons, how to court them and immortality' , id: 5 }
];

const ProductComponents = Products.map((Products) => {
  return <Product title = {Products.title} key = {Products.id} />
});

  return (
    <>
      <Header />
      <section className='ProductPage'>

        { ProductComponents }
        {/* <Product book='Help' />
        <Product book='Skibidiboop' />
        <Product book='The Benefits of gaming' />
        <Product book='How to beome a God' />
        <Product book='Dragons, how to court them and immortality' /> */}
      </section>
    </>
  )
}

export default App
