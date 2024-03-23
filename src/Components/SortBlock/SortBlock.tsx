import cl from "./SortBlock.module.scss";
import SortBlockItem from "../SortBlockItem/SortBlockItem";

function SortBlock() {
  const sortMethodArray = [
    { key: "price", value: "Самый дешевый" },
    { key: "duration", value: "Самый быстрый" },
    { key: "connectionAmount", value: "Самый оптимальный" },
  ];

  return (
    <div className={cl.sortBlock}>
      {sortMethodArray.map((item) => {
        return (
          <SortBlockItem type={item.key} title={item.value} key={item.key} />
        );
      })}
    </div>
  );
}

export default SortBlock;
