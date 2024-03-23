import cl from "./SoertBlockItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { sortByFlights } from "../../Store/FlightsSlice";
import { FC } from "react";
// import { useToggle } from "../../Hooks/hooks";

type TSortProps = {
  type: string;
  title: string;
  key?: string;
};

const SortBlockItem: FC<TSortProps> = ({ type, title }) => {
  const dispatch = useAppDispatch();
  // const [active, setActive] = useToggle(false);

  // const setActiveSortMode = (value: string) => {
  //   dispatch(sortByFlights(value));
  // };

  return (
    <div
      className={cl.sortButton}
      onClick={() => dispatch(sortByFlights(type))}
    >
      {title}
    </div>
  );
};

export default SortBlockItem;
