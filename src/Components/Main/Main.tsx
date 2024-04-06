import { useEffect } from "react";
import FilterBlock from "../FilterBlock/FilterBlock";
import TicketsBlock from "../TicketsBlock/TicketsBlock";
import cl from "./Main.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { loadFligtsArray } from "../../Store/FlightsSlice";

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
