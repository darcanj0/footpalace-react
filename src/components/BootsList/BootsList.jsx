import React, { useState } from "react";
import "./BootsList.css";
import Card from "components/Card/Card";
// import boots from "mocks/boots";

// function BootsList() {
//   const [selectedBoot, setSelectedBoot] = useState({});

//   // [{0:1},...]

//   const addItem = (bootIndex) => {
//     const boot = { [bootIndex]: Number(selectedBoot[bootIndex] || 0) + 1 };
//     setSelectedBoot({ ...selectedBoot, ...boot });
//   };

//   const removeItem = (bootIndex) => {
//     const boot = { [bootIndex]: Number(selectedBoot[bootIndex] || 0) - 1 };
//     setSelectedBoot({ ...selectedBoot, ...boot });
//   };

//   //renderização condicional
//   const badgeCounter = (canRender, index) =>
//     Boolean(canRender) && (
//       <span className="BootBadge">{selectedBoot[index]}</span>
//     );

//   //renderização condicional
//   const removeButton = (canRender, index) =>
//     Boolean(canRender) && (
//       <button className="ActionsTest Btns" onClick={() => removeItem(index)}>
//         <i class="bi bi-cart-dash"></i>
//       </button>
//     );

//   return (
//     <div className="BootsList">
//       {boots.map((boot, index) => (
//         <div className="BootsListItem">
//           <img className="BootImg" src={boot.img} alt={boot.name} />
//           <div className="BootInfo">
//             <div className="BootName">{boot.name}</div>
//             <div className="BootPrice">{`U$ ${boot.price}`}</div>
//             <div className="BootDescription">{boot.description}</div>
//             <div className="BootButtons Actions">
//               {removeButton(selectedBoot[index], index)}
//               {badgeCounter(selectedBoot[index], index)}
//               {/* estilizacao condicional */}
//               <button
//                 className={`ActionsAdd Btns ${
//                   selectedBoot[index] && "ActionsReduce"
//                 }`}
//                 onClick={() => addItem(index)}
//               >
//                 <i class="bi bi-cart-plus"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

function BootsList() {
  const baseURL = "http://localhost:3001/boots";
  const [boots, setBoots] = useState([]);
  const getAllBoots = async () => {
    const response = await fetch(`${baseURL}/find-boots`);
    const list = await response.json();
    setBoots(list);
  };
  return (
    <>
      <button className="DefaultButton" id="listAll" onClick={getAllBoots}>
        List all Boots
      </button>
      <div className="BootsList">
        {boots.map((elem) => {
          return (
            <Card
              name={elem.name}
              description={elem.description}
              img={elem.img}
              price={elem.price}
              key={elem._id}
            />
          );
        })}
      </div>
    </>
  );
}

export default BootsList;
