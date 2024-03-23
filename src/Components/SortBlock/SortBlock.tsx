import cl from "./SortBlock.module.scss";
import SortBlockItem from "../SortBlockItem/SortBlockItem";
import { useState } from "react";

function SortBlock() {
  const [active, setActive] = useState("false");

  const sortMethodArray = [
    { key: "price", value: "Самый дешевый" },
    { key: "duration", value: "Самый быстрый" },
    { key: "connectionAmount", value: "Самый оптимальный" },
  ];

  return (
    <div className={cl.sortBlock}>
      <SortBlockItem type={"price"} title={"Самый дешевый"} />
      <SortBlockItem type={"duration"} title={"Самый быстрый"} />
      <SortBlockItem type={"connectionAmount"} title={"Самый оптимальный"} />
    </div>
  );
}

export default SortBlock;
