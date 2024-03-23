import cl from "./SoertBlockItem.module.scss";
import { useAppDispatch } from "../../Hooks/hooks";
import { sortByFlights } from "../../Store/FlightsSlice";

function SortBlockItem({ type, title }) {
  const dispatch = useAppDispatch();

  const selectSortMethod ()

  return (
    <div
      className={cl.sortButton}
      onClick={() => dispatch(sortByFlights(type))}
    >
      {title}
    </div>
  );
}

export default SortBlockItem;
