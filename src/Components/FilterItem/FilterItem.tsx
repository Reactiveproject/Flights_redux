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

const FilterItem: React.FC<TFilterItem> = ({ title, itemArray, type }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={cl.filterItemBlock}>
      <div className={cl.filterTitle}>{title}</div>
      <form className={cl.filterItemList}>
        {itemArray.map((item) => {
          return (
            <label className={cl.filterItem} key={item.name}>
              {type === "company" && (
                <input
                  className={cl.input}
                  type="radio"
                  value={item.value}
                  name="company"
                  onChange={() => {
                    dispatch(filtredByCompany(item.value));
                  }}
                />
              )}
              {type === "connection" && (
                <input
                  className={cl.input}
                  type="checkbox"
                  value={item.value}
                  onChange={() => {
                    dispatch(filtredByConnections(item.value));
                  }}
                />
              )}
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
};

export default FilterItem;
