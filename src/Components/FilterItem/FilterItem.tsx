import cl from "./FilterItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { filteredByFlights } from "../../Store/FlightsSlice";

// const connectArray = [
//   { name: "Без пересадок", value: 0 },
//   { name: "1 пересадка", value: 1 },
//   { name: "2 пересадки", value: 2 },
//   { name: "3 пересадки", value: 3 },
// ];

function FilterItem({ title, itemArray }) {
  const dispatch = useAppDispatch();

  return (
    <div className={cl.filterItemBlock}>
      <div className={cl.filterTitle}>{title}</div>
      <div className={cl.filterItemList}>
        {itemArray.map((item) => {
          return (
            <div
              className={cl.filterItem}
              key={item}
              onClick={() => {
                dispatch(filteredByFlights(item));
              }}
            >
              <div className={cl.checkbox}></div>
              <div className={cl.filterItemTitle}>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterItem;
