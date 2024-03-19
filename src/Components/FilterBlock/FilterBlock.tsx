import FilterItem from "../FilterItem/FilterItem";

const connetArray: string[] = [
  "Без пересадок",
  "1 пересадка",
  "2 пересадки",
  "3 пересадки",
];

function FilterBlock() {
  return (
    <div className="filter">
      <FilterItem title={"количество пересадок"} array={connetArray} />
    </div>
  );
}

export default FilterBlock;
