import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  const phone = "+923130971390"; // replace with your number
  const message = "Hello, I found your contact through your portfolio site.";
  const encodedMessage = encodeURIComponent(message);
  const link = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(
    phone
  )}&text=${encodedMessage}`;

  return (
    <Container className="footer">
      <a
        href="https://www.linkedin.com/in/muhammad-bilal-621821174"
        className="logo"
      >
        <span>www.bilalqureshi</span>
        <span>.in</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/muhammad-bilal-621821174/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/bilalkhan-tech"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        {/* <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/vinayaksingh.in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}
      </div>
    </Container>
  );
}
