import { useState } from "react";
import { useAppDispatch } from "../../Hooks/hooks";
import cl from "./SortBlock.module.scss";
import { sortByFlights } from "../../Store/FlightsSlice";

const SortBlock: React.FC = () => {
  const dispatch = useAppDispatch();

  const sortMethodArray = [
    { key: "price", value: "Самый дешевый" },
    { key: "duration", value: "Самый быстрый" },
    { key: "connectionAmount", value: "Самый оптимальный" },
  ];

  const [active, setActive] = useState(0);

  const setSelectSort = (index, item) => {
    dispatch(sortByFlights(item.key));
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
            onClick={() => setSelectSort(index, item)}
          >
            {item.value}
          </div>
        );
      })}
    </div>
  );
};

export default SortBlock;
