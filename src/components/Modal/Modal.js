import "./Modal.css";

const Modal = ({ active, setActive }) => {
  return (
    <div className={`my-modal ${active && "modal-active"}`}>
      <div
        className="modal-blur"
        onClick={() => {
          setActive(false);
        }}
      ></div>
      <div className="modal-body">
        <div
          className="close"
          onClick={() => {
            setActive(false);
          }}
        >
          x
        </div>
        <h1 className="title">Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor!
        </p>
      </div>
    </div>
  );
};

export default Modal;
