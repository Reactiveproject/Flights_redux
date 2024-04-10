import { useAppSelector } from "../../Hooks/hooks";
import FilterItem from "../FilterItem/FilterItem";
import cl from "./FilterBlock.module.scss";

const FilterBlock: React.FC = () => {
  const { companiesArray, connectionArray } = useAppSelector(
    (state) => state.flights
  );

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
};

export default FilterBlock;
