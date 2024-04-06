import cl from "./FilterItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import {
  filtredByCompany,
  filtredByConnections,
  IConnectArrayItem,
  ICompanyArrayItem,
} from "../../Store/FlightsSlice";

type TFilterItem = {
  title: string;
  itemArray: ICompanyArrayItem[] | IConnectArrayItem[];
  type: string;
};

function FilterItem({ title, itemArray, type }: TFilterItem) {
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
              onChange={() => {
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
                    : item.filtredBy
                    ? cl.checkbox + " " + cl.activeCheckbox
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
