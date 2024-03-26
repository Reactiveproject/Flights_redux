// import { useSelector } from "react-redux";
import FilterItem from "../FilterItem/FilterItem";
import cl from "./FilterBlock.module.scss";
import { useAppSelector } from "../../Hooks/hooks";

const connectionArray = [
  { name: "Без пересадок", value: 0 },
  { name: "1 пересадка", value: 1 },
  { name: "2 пересадки", value: 2 },
  { name: "3 пересадки", value: 3 },
];

const companiesArray = [
  { name: "Победа", value: "pobeda" },
  { name: "Red Wins", value: "redwings" },
  { name: "S7", value: "s7" },
];

function FilterBlock() {
  return (
    <div className={cl.filterBlock}>
      <FilterItem
        title={"Количество пересадок"}
        itemArray={connectionArray}
        inputType={"checkbox"}
      />
      <FilterItem
        title={"Компании"}
        itemArray={companiesArray}
        inputType={"radio"}
      />
    </div>
  );
}

export default FilterBlock;
