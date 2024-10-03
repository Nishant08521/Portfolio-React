import "./hero.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";
import hero from "../../assets/profile1.jpeg";
import resume from "../../assets/Nishant-Resume.pdf";

const Hero = ({ onClick }) => {
  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section id="home">
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="hero-sub-cont-1" variants={leftVariant}>
            <p>
              HEY <span className="wave">👋</span> ,
            </p>
            <div className="flex left_align">
              I am
              <span className="alt-text-yellow">
                <Typewriter
                  options={{
                    strings: [
                      "Front End Developer",
                      "Web Designer",
                      "UI/UX Designer",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "✍️",
                    pauseFor: 5000,
                  }}
                />
              </span>
            </div>
            <h1 className="hero-main-text ">
              I create <span className="alt-text">beautiful</span> and
              <span className="alt-text"> interactive</span> user interfaces
            </h1>

            <div className="btn-div">
              <button className="btn" onClick={onClick}>
                Hire Me
              </button>
              <Button
                // href=" https://app.luminpdf.com/viewer/66fbb969f1c14a382cf4c491"
                className="btn"
                target="blank"
              >
                <a href={resume} download="resume">
                  Download CV
                  <i className="fa-solid fa-download"></i>
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div className="hero-sub-cont" variants={rightVariant}>
            <img src={hero} alt="3D icon" className="hero-img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
