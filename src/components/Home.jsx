export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Online Store</h1>
          <p>Shop the best products at amazing prices.</p>
          <a href="#" className="shop-now-button">
            Shop Now
          </a>
        </div>
      </section>
      <section className="product-list">
        <div className="product">
          <img src="product1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p className="price">$19.99</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </section>
    </>
  );
}
