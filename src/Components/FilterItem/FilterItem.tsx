// import { IFilter } from "../../types";
import cl from "./FilterItem.module.scss";
// import { ticketsdata } from "../../data";

function FilterItem(title: string, array: string[]): React.FC<any> {
  return (
    <div className={cl.filterItemBlock}>
      <div className={cl.filterTitle}>{title}</div>
      <div className={cl.filterItem}>
        {array.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default FilterItem;
