import cl from "./FilterItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import {
  filtredByCompany,
  filtredByConnections,
} from "../../Store/FlightsSlice";

function FilterItem({
  title,
  itemArray,
  type,
  // }: {
  //   title: string;
  //   itemArray: {
  //     name: string;
  //     value: string | number;
  //     filtredBy: boolean;
  //   }[];
  //   type: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className={cl.filterItemBlock}>
      <div className={cl.filterTitle}>{title}</div>
      <form className={cl.filterItemList}>
        {itemArray.map((item) => {
          return (
            <label
              className={cl.filterItem}
              key={item.name}
              onClick={() => {
                type === "company"
                  ? dispatch(filtredByCompany(item.value))
                  : dispatch(filtredByConnections(item.value));
              }}
            >
              <input
                className={cl.input}
                type={type === "company" ? "radio" : "checkbox"}
                value={item.value}
              />
              <div
                className={
                  type === "company"
                    ? item.filtredBy
                      ? cl.radio + " " + cl.activeRadio
                      : cl.radio
                    : cl.checkbox
                }
              ></div>
              <div className={cl.filterItemTitle}>{item.name}</div>
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default FilterItem;
