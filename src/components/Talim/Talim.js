import "./Talim.css";

const Talim = ({ setActive, item }) => {
  return (
    <div
      className="talim"
      onClick={() => {
        setActive(true);
      }}
    >
      <h2>{item.name}</h2>
      <h4>{item.address}</h4>
      <h4>{`${item.entered} - ${item.finished}`}</h4>
    </div>
  );
};

export default Talim;
