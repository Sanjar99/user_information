import "./Family.css";
import { Link } from "react-router-dom";

// Components
import { Phone, Instagram, Telegram } from "../SVG/SVG";

const Family = ({ item }) => {
  return (
    <section className="family">
      <img className="family__img" src={item.image} alt="person" />
      <div className="family__text">
        <h3>{`${item.fName} ${item.lName}`}</h3>
        <div className="box">
          <Link to={item.tell} className="box__list">
            <Phone />
          </Link>
          <Link to={item.instagram} className="box__list">
            <Instagram />
          </Link>
          <Link to={item.telegram} className="box__list">
            <Telegram />
          </Link>
        </div>
        <p>{item.address}</p>
      </div>
    </section>
  );
};

export default Family;
