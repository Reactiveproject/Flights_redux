import TicketsItem from "../TicketsItem/TicketsItem";
import cl from "./TicketsBlock.module.scss";

function TicketsBlock() {
  return (
    <div className={cl.ticketsBlock}>
      <TicketsItem />
      <TicketsItem />
      <TicketsItem />
      <button className={cl.button} type="submit">
        Загрузить еще билеты
      </button>
    </div>
  );
}

export default TicketsBlock;
