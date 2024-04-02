import FilterItem from "../FilterItem/FilterItem";
import cl from "./FilterBlock.module.scss";
import { connectionArray, companiesArray } from "../Main/Main";

function FilterBlock() {
  return (
    <div className={cl.filterBlock}>
      <FilterItem
        title={"Количество пересадок"}
        itemArray={connectionArray}
        type={"connection"}
      />
      <FilterItem
        title={"Компании"}
        itemArray={companiesArray}
        type={"company"}
      />
    </div>
  );
}

export default FilterBlock;
