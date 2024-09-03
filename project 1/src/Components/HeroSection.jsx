const HeroSection = ()=>{
    return(
        <div className="Main container">
            <div className="Hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>OUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR 
                    FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p> 
                <div className="btn">
                    <button>Shop Now</button>
                    <button className="sec">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                </div>
                <div className="brand-icon">
                    <img src="/Image/amazon.png" alt="amazon-logo"></img>
                    <img src="/Image/flipkart.png" alt="flipkart-logo"></img>
                </div>


            </div>
            <div className="Hero-Image">
                <img src="/Image/shoe_image.png" alt="shoes-img"></img>
            </div>


        </div>
    );
};

export default HeroSection;
