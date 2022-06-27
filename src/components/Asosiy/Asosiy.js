import "./Asosiy.css";

const Asosiy = ({ setActive }) => {
  return (
    <div
      className="asosiy"
      onClick={() => {
        setActive(true);
      }}
    >
      <div className="asosiy-date">
        <h2>77</h2>
        <h3>DEC</h3>
        <h3>2021</h3>
      </div>
      <div className="asosiy-text">
        <h4>Title</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Asosiy;
