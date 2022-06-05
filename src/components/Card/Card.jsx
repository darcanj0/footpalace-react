import "./Card.css";

function Card({ img, name, price, description, identity, quantity }) {
  // const badgeCounter = (canRender, quantity) => {
  //   Boolean(canRender) && <span className="BootBadge">{quantity}</span>;
  // };

  // const removeButton = (canRender, key) => {
  //   Boolean(canRender) && (
  //     <button className="ActionsTest Btns" onClick={() => onRemove(key)}>
  //       <i class="bi bi-cart-dash"></i>
  //     </button>
  //   );
  // };

  return (
    <div className="BootsListItem">
      <img className="BootImg" src={`${img}`} alt={name} />
      <div className="BootInfo">
        <div className="BootName">{name}</div>
        <div className="BootPrice">{`U$ ${price}`}</div>
        <div className="BootDescription">{description}</div>
        <div className="BootButtons Actions">
          {/* {badgeCounter(true, quantity)}
          {removeButton(true, quantity)} */}
          <button className={`ActionsAdd Btns ${quantity && "ActionsReduce"}`}>
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
