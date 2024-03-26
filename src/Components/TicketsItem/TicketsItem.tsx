import cl from "./TicketsItem.module.scss";
import { ITicket } from "../../Store/FlightsSlice";
import { useAppSelector } from "../../Hooks/hooks";
import { connectionArray } from "../FilterBlock";

function TicketsItem({ flight }: ITicket) {
  const logosArray = useAppSelector((state) => state.flights.logos);

  return (
    <div className={cl.tiketsItem}>
      <div className={cl.ticketInfo}>
        <div className={cl.ticketPrice}>
          {flight.price} {flight.currency}
        </div>
        <div className={cl.ticketCompany}>
          {logosArray.map((logo) => {
            if (logo.value === flight.company)
              return <img src={logo.item} alt="logo" key={flight.id} />;
          })}
        </div>
      </div>
      <div className={cl.flightInfo}>
        <div className={cl.fligthDetails}>
          <div>
            {flight.from} - {flight.to}
          </div>
          <div>
            {flight.time.startTime} - {flight.time.endTime}
          </div>
        </div>
        <div className={cl.fligthDetails}>
          <div>В пути</div>
          <div>{flight.duration} ч</div>
        </div>
        <div className={cl.fligthDetails}>
          <div>Пересадки</div>
          {!flight.connectionAmount && <div>Без пересадок</div>}
          {flight.connectionAmount && (
            <div>{flight.connectionAmount} пересадка</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketsItem;
