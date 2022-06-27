import "./Ishjoyi.css";

const Ishjoyi = ({ setActive, item }) => {
  return (
    <div
      className="ish"
      onClick={() => {
        setActive(true);
      }}
    >
      <h2>{item.name}</h2>
      <p>{item.position}</p>
      <p>{`${item.entered} - ${item.finished}`}</p>
    </div>
  );
};

export default Ishjoyi;
