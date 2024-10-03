import "./about.css";
import microphone from "../../assets/about.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";
import about from "../../assets/about.img1.jpg";

const About = () => {
  const handleClick = () => {
    window.location.hash = "#name";
  };

  //framer motion animation variants
  const leftAboutVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
      scale: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  const rightAboutVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1,
      },
    },
  };
  return (
    <section id="about">
      <motion.div
        className="about-main-container"
        initial={"hidden"}
        whileInView={"show"}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="about-container">
          <motion.div
            viewport={{ once: false, amount: 0.5 }}
            variants={leftAboutVariant}
          >
            <img src={about} alt="about-me" className="about-images" />
          </motion.div>

          <motion.div
            className="about-sub-cont"
            viewport={{ once: false, amount: 0.5 }}
            variants={rightAboutVariant}
          >
            <div className="flex">
              <div className="abt-image-div">
                <img
                  src={microphone}
                  alt="note book icon"
                  className="about-image"
                />
              </div>

              <h1 className="abt-header alt-text">About Me</h1>
            </div>

            <div className="column">
              <p>Nishnt kumar singh</p>
              <p className="alt-text"> Frontend Developer </p>
            </div>

            <hr className="short-hr" />

            <p className="about-me-text">
              I'm a Frontend Developer who empathetically creates accessible,
              engaging, functional, and aesthetically pleasing websites . I took
              the initiative to learn to do it myself, and my love of coding
              bloomed. I enjoy creating websites… selecting the perfect colors,
              layouts, and images, to using clean and efficient code that
              conveys the most satisfying, effective, and visually appealing
              experiences for users. With backgrounds in law and e-commerce, I
              appreciate details, meeting deadlines, clear communication, and
              making businesses’ visions come to life. Apart from technology,
              mountains, starry sky and sunsets are things which fascinate me
              the most.{" "}
              <span className="get-in-touch-btn" onClick={handleClick}>
                get in touch!
              </span>
            </p>

            <div className="flex left_align">
              Interests:
              <Typewriter
                options={{
                  strings: [
                    "🎵 Music",
                    "⚽ Football",
                    "🎮 Game",
                    "📷 Photography",
                    "📝 Blogger",
                    "🏏 Cricket",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "✍️",
                  pauseFor: 3000,
                }}
              />
            </div>

            <Button
              href="https://app.luminpdf.com/viewer/66fbb969f1c14a382cf4c491"
              className="btn alt-text"
              target="blank"
            >
              Download CV
              <i className="fa-solid fa-download"></i>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
