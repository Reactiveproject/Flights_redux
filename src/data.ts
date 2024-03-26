// import { useState } from "react";
import Pobeda_logo from "./assets/company_logos/pobeda_logo.svg";
import S7_logo from "./assets/company_logos/S7_logo.svg";
import RedWings_logo from "./assets/company_logos/redwings_logo.svg";

const ticketsdata = [
  {
    id: 1,
    from: "SVO",
    to: "BEL",
    company: "pobeda",
    price: 100,
    currency: "RUB",
    time: {
      startTime: "11:00",
      endTime: "14:00",
    },
    duration: 1,
    date: "22.11.24",
    connectionAmount: 1,
  },
  {
    id: 2,
    from: "KAZ",
    to: "CDG",
    company: "redwings",
    price: 200,
    currency: "RUB",
    time: {
      startTime: "11:00",
      endTime: "15:00",
    },
    duration: 3,
    date: "21.11.24",
    connectionAmount: 2,
  },
  {
    id: 3,
    from: "TMS",
    to: "VDK",
    company: "s7",
    price: 50,
    currency: "RUB",
    time: {
      startTime: "13:00",
      endTime: "15:00",
    },
    duration: 2,
    date: "20.11.24",
    connectionAmount: 0,
  },
  {
    id: 4,
    from: "VKO",
    to: "BRL",
    company: "s7",
    price: 180,
    currency: "RUB",
    time: {
      startTime: "09:00",
      endTime: "12:00",
    },
    duration: 4,
    date: "22.11.24",
    connectionAmount: 3,
  },
  {
    id: 5,
    from: "LED",
    to: "BCN",
    company: "pobeda",
    price: 190,
    currency: "RUB",
    time: {
      startTime: "15:00",
      endTime: "19:00",
    },
    duration: 6,
    date: "25.11.24",
    connectionAmount: 2,
  },
  {
    id: 6,
    from: "OMK",
    to: "PRG",
    company: "redwings",
    price: 250,
    currency: "RUB",
    time: {
      startTime: "15:00",
      endTime: "20:00",
    },
    duration: 5,
    date: "25.11.24",
    connectionAmount: 1,
  },
];

const compLogo = [
  {
    company: "Победа",
    logo_link: { Pobeda_logo },
  },
  {
    company: "Red Wings",
    logo_link: { RedWings_logo },
  },
  {
    company: "S7",
    logo_link: { S7_logo },
  },
];

///////// логика эмулятора JSON сервера

// let a = 0;
// let b = 2; // добавить переменную

// const sequence = () => {
//   // let start = 0;
//   // return function () {
//   //   return (start += 2);
//   // };
// };

// let add1 = sequence();

const arrayLoading = () => {
  setTimeout(arrayUpdate, 1500);
};

const arrayUpdate = () => {
  // let c = add1();
  // let arr2 = ticketsdata.slice(a, b);
  // if (c <= ticketsdata.length) {
  //   log.innerHTML = arr2;
  //   a = count;
  //   b = 2 + count;
  // } else {
  //   log.innerHTML = "Массив закончился!";
  // }
};

export { ticketsdata, arrayUpdate, arrayLoading, compLogo };
