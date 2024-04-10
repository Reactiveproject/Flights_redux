import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IServerData {
  data: ITicket[];
  length: number;
  first: number;
  items: number;
  last: number | null;
  next: number | null;
  pages: number | null;
  prev: number | null;
}
export interface ITicket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: string;
  time: TicketTime;
  duration: number;
  date?: string;
  connectionAmount: number;
}

export interface IConnectArrayItem {
  name: string;
  value: number;
  filtredBy: boolean;
}

export interface ICompanyArrayItem {
  name: string;
  value: string;
  filtredBy: boolean;
}

export interface TicketTime {
  startTime: string;
  endTime: string;
}

type FlightsState = {
  flights: ITicket[];
  flightsConteiner: ITicket[];
  connectionArray: IConnectArrayItem[];
  companiesArray: ICompanyArrayItem[];
  connections: number[];
  status: string;
  error: string | undefined;
  currentpage: number;
  pages: number | null;
};

const initialState: FlightsState = {
  flights: [],
  flightsConteiner: [],
  connectionArray: [
    { name: "Без пересадок", value: 0, filtredBy: false },
    { name: "1 пересадка", value: 1, filtredBy: false },
    { name: "2 пересадки", value: 2, filtredBy: false },
    { name: "3 пересадки", value: 3, filtredBy: false },
  ],
  companiesArray: [
    { name: "Все компании", value: "all", filtredBy: true },
    { name: "Победа", value: "pobeda", filtredBy: false },
    { name: "Red Wins", value: "redwings", filtredBy: false },
    { name: "S7 Airlines", value: "s7", filtredBy: false },
  ],
  connections: [],
  status: "",
  error: "",
  currentpage: 1,
  pages: null,
};

export const loadFligtsArray = createAsyncThunk<
  IServerData,
  undefined,
  { rejectValue: string; state: { flights: FlightsState } }
>("flights/loadFligtsArray", async function (_, { rejectWithValue, getState }) {
  const curpage: number = getState().flights.currentpage;

  const response = await fetch(
    `http://localhost:3001/fligths?_page=${curpage}&_per_page=3`
  );

  if (!response.ok) {
    return rejectWithValue("Ошибка загрузки!!");
  }
  const data = await response.json();
  return data;
});

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    sortByFlights(state: FlightsState, action: PayloadAction<number>) {
      state.flights.sort((a, b) => a[action.payload] - b[action.payload]);
    },
    filtredByCompany(state: FlightsState, action: PayloadAction<string>) {
      action.payload === "all"
        ? (state.flights = state.flightsConteiner)
        : (state.flights = state.flightsConteiner.filter(
            (item) => item.company === action.payload
          ));
      state.companiesArray.map((item) => {
        action.payload === item.value
          ? (item.filtredBy = true)
          : (item.filtredBy = false);
      });
    },
    filtredByConnections(state: FlightsState, action: PayloadAction<number>) {
      state.connectionArray.map((item) => {
        action.payload === item.value && (item.filtredBy = !item.filtredBy);
      });
      !state.connections.includes(action.payload)
        ? state.connections.push(action.payload)
        : (state.connections = state.connections.filter(
            (item) => item !== action.payload
          ));

      !state.connections.length
        ? (state.flights = state.flightsConteiner)
        : (state.flights = state.flightsConteiner.filter((item) =>
            state.connections.some(
              (transfer) => transfer == item.connectionAmount
            )
          ));
    },
    changeInitPosition(state: FlightsState) {
      state.pages && state.pages > state.currentpage
        ? (state.currentpage = state.currentpage + 1)
        : (state.currentpage = 1);
      console.log(state.currentpage);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFligtsArray.pending, (state: FlightsState) => {
        state.status = "loading";
      })
      .addCase(
        loadFligtsArray.fulfilled,
        (state: FlightsState, action: PayloadAction<IServerData>) => {
          state.status = "resolved";
          console.log(action.payload);
          state.flights = action.payload.data;
          state.flightsConteiner = action.payload.data;
          state.pages = action.payload.pages;
        }
      )
      .addCase(loadFligtsArray.rejected, (state: FlightsState, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const {
  sortByFlights,
  filtredByCompany,
  filtredByConnections,
  changeInitPosition,
} = flightsSlice.actions;
export default flightsSlice.reducer;
