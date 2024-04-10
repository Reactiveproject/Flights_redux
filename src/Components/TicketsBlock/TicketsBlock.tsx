import TicketsItem from "../TicketsItem/TicketsItem";
import cl from "./TicketsBlock.module.scss";
import SortBlock from "../SortBlock/SortBlock";
import MobileFilterBlock from "../MobileFilterBlock/MobileFilterBlock";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { useEffect } from "react";
import { loadFligtsArray, changeInitPosition } from "../../Store/FlightsSlice";

const TicketsBlock: React.FC = () => {
  const { flights, error, status, currentpage } = useAppSelector(
    (state) => state.flights
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFligtsArray());
  }, [dispatch, currentpage]);

  return (
    <div className={cl.ticketsBlock}>
      <SortBlock />
      <MobileFilterBlock />
      {status === "loading" && <h2>Загрузка...</h2>}
      {error && <h2>Ошибка загрузки: {error}</h2>}
      {flights.map((item) => {
        return <TicketsItem flight={item} key={item.id} />;
      })}

      <button
        className={cl.button}
        type="submit"
        onClick={() => {
          dispatch(changeInitPosition());
        }}
      >
        Загрузить еще билеты
      </button>
    </div>
  );
};

export default TicketsBlock;
