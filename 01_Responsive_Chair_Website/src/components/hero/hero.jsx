import React from "react";
import { IoChevronForward } from "react-icons/io5";
import './hero.css'


const hero = () => {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="hero-container container">

            <div className="hero-data">
                <h1>The most <br />
                    <span className="gradient-text">comfortable</span>
                    <br />
                    chair for you
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quis quisquam consectetur illo vel. Adipisci!</p>
                <div className="hero-btns">
                    <a href="#" className="btn shop-now">Shop Now</a>
                    <a href="#" className="learn-more gradient-text">
                        <span>Learn More</span>
                        <IoChevronForward />
                        
                    </a>
                </div>
                <div className="hero-numbers">
                    <div className="n-box">
                        <h2>12K
                            <span>+</span>
                        </h2>
                        <p>Premium <br />Product</p>
                    </div>
                    <div className="n-box">
                        <h2>21K
                            <span>+</span>
                        </h2>
                        <p>Happy <br />Customer</p>
                    </div>
                    <div className="n-box">
                        <h2>28K
                            <span>+</span>
                        </h2>
                        <p>Award <br />Winning</p>
                    </div>
                </div>
            </div>

            <div className="hero-images">
                <img src="./Home.png" className="main-img" alt="" />
                <img src="./background.png" alt="" className="hero-bg-img" />
                <img src="./Tag.png" alt="" className="tag-img" />
            </div>

        </div>
      </section>
    </div>
  );
};

export default hero;
