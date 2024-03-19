import { ticketsdata } from "../../data";
import cl from "./TicketsItem.module.scss";
import logo from "../../assets/company_logos/pobeda_logo.svg";

function TicketsItem() {
  return (
    <div className={cl.tiketsItem}>
      <div className={cl.ticketInfo}>
        <div className={cl.ticketPrice}>12 000 Р</div>
        <div className={cl.ticketCompany}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={cl.flightInfo}>
        <div className={cl.fligthDetails}>
          <div>SVO-LED</div>
          <div>12:00-16:00</div>
        </div>
        <div className={cl.fligthDetails}>
          <div>В пути</div>
          <div>2 ч 0 мин</div>
        </div>
        <div className={cl.fligthDetails}>
          <div>Пересадки</div>
          <div>1 пересадка</div>
        </div>
      </div>
    </div>
  );
}

export default TicketsItem;
