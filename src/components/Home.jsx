import "../../public/css/home.css";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Online Store</h1>
          <p>Shop the best products at amazing prices.</p>
          <a href="/products" className="shop-now-button">
            Shop Now
          </a>
        </div>
      </section>
    </>
  );
}
