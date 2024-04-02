import { useEffect } from "react";
import FilterBlock from "../FilterBlock/FilterBlock";
import TicketsBlock from "../TicketsBlock/TicketsBlock";
import cl from "./Main.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { loadFligtsArray } from "../../Store/FlightsSlice";

export const connectionArray = [
  { name: "Без пересадок", value: 0 },
  { name: "1 пересадка", value: 1 },
  { name: "2 пересадки", value: 2 },
  { name: "3 пересадки", value: 3 },
];

export const companiesArray = [
  { name: "Победа", value: "pobeda" },
  { name: "Red Wins", value: "redwings" },
  { name: "S7 Airlines", value: "s7" },
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
