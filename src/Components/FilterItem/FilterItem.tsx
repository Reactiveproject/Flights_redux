import cl from "./FilterItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { filteredByFlights } from "../../Store/FlightsSlice";

function FilterItem({ title, itemArray, type }) {
  const dispatch = useAppDispatch();

  return (
    <div className={cl.filterItemBlock}>
      <div className={cl.filterTitle}>{title}</div>
      <div className={cl.filterItemList}>
        {itemArray.map((item) => {
          return (
            <div
              className={cl.filterItem}
              key={item.name}
              onClick={() => {
                dispatch(filteredByFlights(item.value));
              }}
            >
              <div className={cl.checkbox}></div>
              <div className={cl.filterItemTitle}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterItem;
