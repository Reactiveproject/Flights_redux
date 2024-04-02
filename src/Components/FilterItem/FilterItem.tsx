import cl from "./FilterItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import {
  filtredByCompany,
  filtredByConnections,
} from "../../Store/FlightsSlice";

function FilterItem({
  title,
  itemArray,
  inputType,
}: {
  title: string;
  itemArray: {
    name: string;
    value: any;
  }[];
  inputType: string;
}) {
  const dispatch = useAppDispatch();

  // const setSelectFilter = (item) => {
  //   dispatch(filteredByFlights(item.value));
  // };

  return (
    <div className={cl.filterItemBlock}>
      <div className={cl.filterTitle}>{title}</div>
      <form className={cl.filterItemList}>
        {itemArray.map((item) => {
          return (
            <label
              className={cl.filterItem}
              key={item.name}
              onClick={() => dispatch(filtredByCompany(item.value))}
            >
              <input className={cl.input} type={inputType} value={item.value} />
              <div className={cl.checkbox}></div>
              <div className={cl.filterItemTitle}>{item.name}</div>
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default FilterItem;
