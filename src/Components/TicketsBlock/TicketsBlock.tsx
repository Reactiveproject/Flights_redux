import TicketsItem from "../TicketsItem/TicketsItem";
import cl from "./TicketsBlock.module.scss";
import SortBlock from "../SortBlock/SortBlock";
import { useAppSelector } from "../../Hooks/hooks";

function TicketsBlock() {
  const ticketsdata = useAppSelector((state) => state.flights.flights);
  return (
    <div className={cl.ticketsBlock}>
      <SortBlock />
      {ticketsdata.map((flight) => {
        return <TicketsItem flight={flight} key={flight.id} />;
      })}
      <button className={cl.button} type="submit" onClick={() => {}}>
        Загрузить еще билеты
      </button>
    </div>
  );
}

export default TicketsBlock;
