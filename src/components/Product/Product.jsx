import './Product.css';

function Product (Props) {

    // Props

    return (
        <section className='Product'>
            <h2>{Props.book}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur, molestiae voluptatum saepe, qui odio sunt similique error ratione laudantium molestias quam quibusdam culpa. Voluptate velit alias id totam aperiam architecto odit voluptates, magni, vel voluptatibus tempora culpa exercitationem repellendus dolorem suscipit explicabo.
            </p>
        </section>
    )
}

export default Product