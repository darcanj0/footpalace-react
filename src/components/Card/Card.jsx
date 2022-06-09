import "./Card.css";

function Card({
  img,
  name,
  price,
  description,
  identity,
  quantity,
  onAdd,
  onRemove,
  consumerView,
}) {
  const badgeCounter = (quantity) =>
    Boolean(quantity) && <span className="BootBadge">{quantity}</span>;

  const removeButton = (quantity, indentity) =>
    Boolean(quantity) && (
      <button className="ActionsTest Btns" onClick={() => onRemove(indentity)}>
        <i className="bi bi-cart-dash"></i>
      </button>
    );

  return (
    <div className="BootsListItem">
      <img className="BootImg" src={`${img}`} alt={name} />
      <div className="BootInfo">
        <div className="BootName">{name}</div>
        <div className="BootPrice">{`U$ ${price}`}</div>
        <div className="BootDescription">{description}</div>
        {consumerView ? (
          <div className="BootButtons Actions">
            {removeButton(quantity, identity)}
            {badgeCounter(quantity)}
            <button
              onClick={() => {
                onAdd(identity);
              }}
              className={`ActionsAdd Btns ${quantity && "ActionsReduce"}`}
            >
              <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        ) : (
          <div className="BootActions BootButtons">
            <button className="Btns ActionsTest">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className="Btns ActionsTest">
              <i className="bi bi-trash"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
