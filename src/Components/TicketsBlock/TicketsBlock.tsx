import TicketsItem from "../TicketsItem/TicketsItem";
import cl from "./TicketsBlock.module.scss";
import SortBlock from "../SortBlock/SortBlock";
import { useAppSelector } from "../../Hooks/hooks";
import MobileFilterBlock from "../MobileFilterBlock/MobileFilterBlock";

function TicketsBlock() {
  const { flights, error, status } = useAppSelector((state) => state.flights);

  return (
    <div className={cl.ticketsBlock}>
      <SortBlock />
      <MobileFilterBlock />
      {status === "loading" && <h2>Загрузка...</h2>}
      {error && <h2>Ошибка загрузки: {error}</h2>}
      {flights.map((item) => {
        return <TicketsItem flight={item} key={item.id} />;
      })}
      {/* <button
        className={cl.button}
        type="submit"
        onClick={() => {
          dispatch(changeInitPosition(3));
        }}
      >
        Загрузить еще билеты
      </button> */}
    </div>
  );
}

export default TicketsBlock;
