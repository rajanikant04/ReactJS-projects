const HeroSection = () => {
    return  (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum officia odit consequuntur nesciunt dolores quas dolore quaerat iusto culpa? 
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="sec-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe-img" />
            </div>
        </main>
    );
}

export default HeroSection;