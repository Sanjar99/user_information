import "./Komunal.css";

const Komunal = ({ setActive, item }) => {
  return (
    <div
      className="komunal"
      onClick={() => {
        setActive(true);
      }}
    >
      <h2>{item.name}</h2>
      <h4>To'langan: {item.paid}</h4>
      <h4>Qarzi: {item.debt}</h4>
    </div>
  );
};

export default Komunal;
