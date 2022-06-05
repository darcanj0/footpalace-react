import "./Card.css";

function Card(props) {
  return (
    <div className="BootsListItem">
      <img className="BootImg" src={`${props.img}`} alt={props.name} />
      <div className="BootInfo">
        <div className="BootName">{props.name}</div>
        <div className="BootPrice">{`U$ ${props.price}`}</div>
        <div className="BootDescription">{props.description}</div>
        <div className="BootButtons Actions">
          <button className="Btns ActionsAdd">
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
