import cl from "./Header.module.scss";
import logo from "../../assets/header_logo_1.svg";

export default function Header() {
  return (
    <div className={cl.header}>
      <div className={cl.headerLogo}>
        <img src={logo} alt="header logo" />
      </div>
      <div className={cl.headerText}>Поиск авиабеилетов</div>
    </div>
  );
}
