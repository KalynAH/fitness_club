import "./Footer.css";
import appStore from "../../assets/app-store.png";
import playStore from "../../assets/play-store.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="d-flex justify-content-center align-items-center flex-column title-container">
        <h3 className="mt-3">Download our Virtual Fitness Club App</h3>
        <div className="d-flex justify-content-center align-items-center gap-3 app-container">
          <img src={appStore} alt="" />
          <img src={playStore} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
