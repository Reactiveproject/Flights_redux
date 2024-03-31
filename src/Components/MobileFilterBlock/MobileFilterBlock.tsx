import cl from "./MobileFilterBlock.module.scss";
import FilterItem from "../FilterItem/FilterItem";
import { connectionArray, companiesArray } from "../Main/Main";
import openTabIco from "../../assets/opentabIco.svg";
import { useState } from "react";

function MobileFilterBlock() {
  const [visible, setVisible] = useState("false");

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
            className={visible && cl.optionTabIco}
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
            inputType={"radio"}
          />
          <FilterItem
            title={"Количество пересадок"}
            itemArray={connectionArray}
            inputType={"checkbox"}
          />
        </div>
      )}
    </div>
  );
}

export default MobileFilterBlock;
