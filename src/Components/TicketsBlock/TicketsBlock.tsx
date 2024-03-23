import TicketsItem from "../TicketsItem/TicketsItem";
import cl from "./TicketsBlock.module.scss";
import { ITicket } from "../../types";
import { useSelector } from "react-redux";
import SortBlock from "../SortBlock/SortBlock";

function TicketsBlock() {
  const ticketsdata = useSelector((state) => state.flights.flights);
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
