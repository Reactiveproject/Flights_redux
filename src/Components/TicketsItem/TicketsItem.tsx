import cl from "./TicketsItem.module.scss";
import { ITicket } from "../../Store/FlightsSlice";
import { connectionArray } from "../Main/Main";

import pobeda_logo from "../../assets/company_logos/pobeda_logo.svg";
import red_logo from "../../assets/company_logos/redwings_logo.svg";
import s7_logo from "../../assets/company_logos/S7_logo.svg";

const logoArray = [
  { item: pobeda_logo, value: "pobeda" },
  { item: red_logo, value: "redwings" },
  { item: s7_logo, value: "s7" },
];

function TicketsItem({ flight }: ITicket) {
  return (
    <div className={cl.tiketsItem}>
      <div className={cl.ticketInfo}>
        <div className={cl.ticketPrice}>
          {flight.price.toLocaleString("ru-RU")} {flight.currency}
        </div>
        <div className={cl.ticketCompany}>
          {logoArray.map((logo) => {
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
          {connectionArray.map((item) => {
            if (item.value === flight.connectionAmount)
              return (
                <div className={cl.fligthDetails} key={item.name}>
                  {item.name}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default TicketsItem;
