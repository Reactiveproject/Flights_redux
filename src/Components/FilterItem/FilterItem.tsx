import cl from "./FilterItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { filteredByFlights } from "../../Store/FlightsSlice";

function FilterItem({ title, itemArray, inputType }) {
  const dispatch = useAppDispatch();

  return (
    <div className={cl.filterItemBlock}>
      <div className={cl.filterTitle}>{title}</div>
      <form className={cl.filterItemList}>
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
              <input className={cl.input} type={inputType} value={item.value} />
              <div className={cl.filterItemTitle}>{item.name}</div>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default FilterItem;
