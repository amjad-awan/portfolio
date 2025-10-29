import { Container } from "./styles";
import MyPhoto from "../../assets/WhatsApp.png";
import MyPhotoBG from "../../assets/WhatsApp_Image.png";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import firebaseIcon from "../../assets/firebase-.svg";
import nodeIcon from "../../assets/node-.svg";
import android from "../../assets/android-_cleaned.svg";
import appleIcon from "../../assets/apple-_cleaned.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Muhmmad Bilal, a skilled React Native developer. With
            my extensive experience in delivering successful projects, I bring a
            unique blend of technical expertise and business acumen to every
            endeavor.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            As a React Native developer, I have understand development using
            these technologies, allowing me to create robust and scalable
            applications. My expertise lies in designing and implementing
            efficient architectures, optimizing performance, and ensuring
            seamless integration across the entire development process.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Throughout my career, I have consistently demonstrated my ability to
            build strong and collaborative relationships with various
            stakeholders, including product managers, engineers, support staff,
            and field teams. By fostering effective communication and fostering
            a culture of teamwork, I have successfully facilitated product
            development and adoption, ensuring alignment with organizational
            goals. Overall, I am skillful about leveraging my React Native
            expertise to drive impactful projects, deliver exceptional results,
            and contribute to the growth and success of forward-thinking
            organizations. I am open to new opportunities and collaborations
            where I can apply my knowledge and experience to make a significant
            difference.
          </p>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h2>Education:</h2>
            <br />
            <h4> Bechalor's in Information Technology (BSIT)</h4>
            <br />
            <p>
              PMAS Arid AgriCultural University Rawalpindi | Oct 2016-Feb 2021
            </p>
            {/* <p>8.09 CGPA</p> */}
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h2>Experience:</h2>
            <br />
            <h4>Senior React Native Developer</h4>
            <p>Global Software Consultancy - Present</p>
            <p>Lahore, Pakistan</p>
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h4>Senior React Native Developer / Team Lead</h4>
            <p>TheWebieStorms </p>
            <p>Lahore, Pakistan</p>
          </div>
        </ScrollAnimation>
        <br />

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h4>Mid-level React Native Developer</h4>
            <p>OutsourceNZ </p>
            <p>Lahore, Pakistan</p>
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h4>Associate React Native Developer</h4>
            <p>Prismatic Technologies </p>
            <p>Lahore, Pakistan</p>
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h4>Junior React Native Developer</h4>
            <p>Digital Sensei Technology </p>
            <p>Lahore, Pakistan</p>
          </div>
        </ScrollAnimation>
        <br />

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h2>Here are my main skills:</h2>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={android} alt="Android" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={appleIcon} alt="iPhone" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={firebaseIcon} alt="Frebase" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={nodeIcon} alt="Nodejs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img
            src={MyPhotoBG}
            alt="Muhammad Bilal"
            style={{ borderRadius: 50 }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
