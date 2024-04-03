import cl from "./MobileFilterBlock.module.scss";
import FilterItem from "../FilterItem/FilterItem";
import openTabIco from "../../assets/opentabIco.svg";
import { useState } from "react";
import { useAppSelector } from "../../Hooks/hooks";

function MobileFilterBlock() {
  const [visible, setVisible] = useState(false);

  const { companiesArray, connectionArray } = useAppSelector(
    (state) => state.flights
  );

  return (
    <div className={cl.mobileFilterBlock}>
      <div className={cl.titleBlock}>
        <div className={cl.optionTitle}>
          <p>Любая авиакомпания, любое кол-во пересадок</p>
          <p>Любая авиакомпания, пересадок: 0, 1, 2</p>
        </div>
        <div className={cl.optionTab}>
          <p className={cl.optionTabTitle}>Открыть настройки</p>
          <img
            src={openTabIco}
            className={visible ? cl.optionTabIco : undefined}
            alt="openTabIco"
            onClick={() => {
              setVisible(!visible);
            }}
          />
        </div>
      </div>
      {visible && (
        <div className={cl.filterBlock}>
          <FilterItem
            title={"Компании"}
            itemArray={companiesArray}
            type={"company"}
          />
          <FilterItem
            title={"Количество пересадок"}
            itemArray={connectionArray}
            type={"connection"}
          />
        </div>
      )}
    </div>
  );
}

export default MobileFilterBlock;
