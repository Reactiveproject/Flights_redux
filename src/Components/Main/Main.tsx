import FilterBlock from "../FilterBlock/FilterBlock";
import TicketsBlock from "../TicketsBlock/TicketsBlock";
import cl from "./Main.module.scss";

const Main: React.FC = () => {
  return (
    <div className={cl.main}>
      <FilterBlock />
      <TicketsBlock />
    </div>
  );
};

export default Main;
