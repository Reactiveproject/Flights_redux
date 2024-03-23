import cl from "./TicketsItem.module.scss";
import logo from "../../assets/company_logos/pobeda_logo.svg";
import { ITicket } from "../../types";
import { useSelector } from "react-redux";

function TicketsItem({ flight }) {
  // const logosArray = useSelector((state) => state.flights.logos);

  return (
    <div className={cl.tiketsItem}>
      <div className={cl.ticketInfo}>
        <div className={cl.ticketPrice}>
          {flight.price} {flight.currency}
        </div>
        <div className={cl.ticketCompany}>
          <img src={logo} alt="logo" key={flight.id} />
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
