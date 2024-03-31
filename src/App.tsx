import { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { useDispatch } from "react-redux";
import { loadFligtsArray } from "./Store/FlightsSlice";
// import { useState } from "react";
// import { ITicket } from "./types";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
