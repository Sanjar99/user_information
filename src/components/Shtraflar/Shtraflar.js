import "./Shtraflar.css";

const Shtraflar = ({ setActive }) => {
  return (
    <div
      className="shtraf"
      onClick={() => {
        setActive(true);
      }}
    >
      <h2>Title</h2>
      <h4>7.7.1990 - 7.7.2000</h4>
    </div>
  );
};

export default Shtraflar;
