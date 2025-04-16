import "./about.css";
import { SiAdguard } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const about = () => {
  return (
    <div>
      <section className="about container" id="about">
        <div className="about-img">
          <img src="./about.png" alt="" />
        </div>
        <div className="about-data">
          <h2 className="heading">
            Why <span className="gradient-text">Choose</span> Us?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi
            explicabo saepe, aliquam molestiae quia.
          </p>
          <div className="about-box-data">
          <div className="about-box">
            <span className="about-icon">
              <SiAdguard />
            </span>
            <h3 className="box-title">Longevity</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam repellendus tempora veniam ad minima.
            </p>
          </div>

          <div className="about-box">
            <span className="about-icon">
              <AiFillStar />
            </span>
            <h3 className="box-title">Heritage</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam repellendus tempora veniam ad minima.
            </p>
          </div>

          <div className="about-box">
            <span className="about-icon">
              <FaCheck />
            </span>
            <h3 className="box-title">Quality</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam repellendus tempora veniam ad minima.
            </p>
          </div>

          <div className="about-box">
            <span className="about-icon">
              <IoIosPeople />
            </span>
            <h3 className="box-title">Community</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam repellendus tempora veniam ad minima.
            </p>
          </div>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default about;
