import { useState } from "react";
import { useToggle } from "../../Hooks/hooks";
import cl from "./SortBlock.module.scss";

function SortBlock() {
  const sortMethodArray = [
    { key: "price", value: "Самый дешевый" },
    { key: "duration", value: "Самый быстрый" },
    { key: "connectionAmount", value: "Самый оптимальный" },
  ];

  const [active, setActive] = useState(0);

  const setButtonActive = (index) => {
    setActive(index);
  };

  return (
    <div className={cl.sortBlock}>
      {sortMethodArray.map((item, index) => {
        return (
          <div
            className={
              active === index ? cl.sortButton + " " + cl.active : cl.sortButton
            }
            key={item.value}
            onClick={() => setButtonActive(index)}
          >
            {item.value}
          </div>
        );
      })}
    </div>
  );
}

export default SortBlock;
