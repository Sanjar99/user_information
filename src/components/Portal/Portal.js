import "./Portal.css";

const Portal = ({ setActive }) => {
  return (
    <div
      className="portal"
      onClick={() => {
        setActive(true);
      }}
    >
      <h2>Prezdent portal</h2>
      <h4>10</h4>
    </div>
  );
};

export default Portal;
