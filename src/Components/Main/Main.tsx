import { useEffect } from "react";
import FilterBlock from "../FilterBlock/FilterBlock";
import TicketsBlock from "../TicketsBlock/TicketsBlock";
import cl from "./Main.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { loadFligtsArray } from "../../Store/FlightsSlice";

export const connectionArray = [
  { name: "Без пересадок", value: 0, filtredBy: false },
  { name: "1 пересадка", value: 1, filtredBy: false },
  { name: "2 пересадки", value: 2, filtredBy: false },
  { name: "3 пересадки", value: 3, filtredBy: false },
];

export const companiesArray = [
  { name: "Победа", value: "pobeda", filtredBy: false },
  { name: "Red Wins", value: "redwings", filtredBy: false },
  { name: "S7 Airlines", value: "s7", filtredBy: false },
];

function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFligtsArray());
  }, [dispatch]);

  return (
    <div className={cl.main}>
      <FilterBlock />
      <TicketsBlock />
    </div>
  );
}

export default Main;
