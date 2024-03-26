// import { useSelector } from "react-redux";
import FilterItem from "../FilterItem/FilterItem";
import cl from "./FilterBlock.module.scss";
import { useAppSelector } from "../../Hooks/hooks";

function FilterBlock() {
  const ticketsdata = useAppSelector((state) => state.flights.flights);

  const connectionsArray = ticketsdata.map((item) => item.connectionAmount);
  const companiesArray = ticketsdata.map((item) => item.company);

  const uniqueItemArray = (array) => {
    const uniqArr = array.reduce((acc, item) => {
      if (acc.includes(item)) {
        return acc;
      }
      return [...acc, item];
    }, []);

    const result = uniqArr.sort((a, b) => a - b);

    return result;
  };

  const uniqueConnectionsArray = uniqueItemArray(connectionsArray);
  const uniqueCompaniesArray = uniqueItemArray(companiesArray);

  console.log(uniqueConnectionsArray);
  console.log(uniqueCompaniesArray);

  return (
    <div className={cl.filterBlock}>
      <FilterItem
        title={"Количество пересадок"}
        itemArray={uniqueConnectionsArray}
      />
      <FilterItem title={"Компании"} itemArray={uniqueCompaniesArray} />
    </div>
  );
}

export default FilterBlock;
