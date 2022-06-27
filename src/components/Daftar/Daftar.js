import "./Daftar.css";

const Daftar = ({ setActive }) => {
  return (
    <div
      className="daftar"
      onClick={() => {
        setActive(true);
      }}
    >
      <div className="asosiy-text">
        <h4>Daftar</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <h2>07.07.2021</h2>
    </div>
  );
};

export default Daftar;
