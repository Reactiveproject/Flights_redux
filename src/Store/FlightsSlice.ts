import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ticketsdata, logoArray } from "../data";

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

interface ILogos {
  item: string;
  value: string;
}

interface TicketTime {
  startTime: string;
  endTime: string;
}

type FlightsState = {
  flights: ITicket[];
  logos: ILogos[];
  status: string;
  error: any;
};

const initialState: FlightsState = {
  flights: [],
  logos: [],
  status: "false",
  error: null,
};

const urlAPI = "http://localhost:3001/fligths";

export const loadFligtsArray = createAsyncThunk(
  "flights/loadFligtsArray",
  async function () {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
  }
);

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    loadFlights(state) {
      state.flights = [...ticketsdata];
      state.logos = [...logoArray];
    },
    sortByFlights(state, action: PayloadAction<string>) {
      state.flights.sort((a, b) => a[action.payload] - b[action.payload]);
    },
    filteredByFlights(state, action) {
      console.log(action.payload);
      state.flights = state.flights.filter((item) => {
        item.connectionAmount === action.payload;
      });
    },
  },
  extraReducers: {
    [loadFligtsArray.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [loadFligtsArray.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.flights = action.payload;
    },
    [loadFligtsArray.rejected]: (state, actions) => {},
  },
});

export const { sortByFlights, loadFlights, filteredByFlights } =
  flightsSlice.actions;
export default flightsSlice.reducer;
