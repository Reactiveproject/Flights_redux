import cl from "./MobileFilterBlock.module.scss";
import FilterItem from "../FilterItem/FilterItem";
import { connectionArray, companiesArray } from "../Main/Main";
import openTabIco from "../../assets/opentabIco.svg";

function MobileFilterBlock() {
  return (
    <div className={cl.mobileFilterBlock}>
      <div className={cl.titleBlock}>
        <div className={cl.optionTitle}>
          <p>Любая авиакомпания, любое кол-во пересадок</p>
          <p>Любая авиакомпания, пересадок: 0, 1, 2</p>
        </div>
        <div className={cl.optionTab}>
          <p className={cl.optionTabTitle}>Открыть настройки</p>
          <img src={openTabIco} className={cl.optionTabIco} alt="openTabIco" />
        </div>
      </div>
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
    </div>
  );
}

export default MobileFilterBlock;
