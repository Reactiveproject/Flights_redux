import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ticketsdata } from "../data";

interface ITicket {
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

interface TicketTime {
  startTime: string;
  endTime: string;
}

type FlightsState = {
  flights: ITicket[];
  filtredFlights: ITicket[];
  status: string;
  error: string;
};

const initialState: FlightsState = {
  flights: [],
  filtredFlights: [],
  status: "false",
  error: "",
};

// const urlAPI = "http://localhost:3000/fligths";

// const loadFligtsArray = createAsyncThunk(
//   "flights/loadFligtsArray",
//   async function () {
//     const response = await fetch(urlAPI);
//     const data = await response.json();
//     return data;
//   }
// );

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    loadFlights(state) {
      state.flights = [...ticketsdata];
    },
    sortByFlights(state, action: PayloadAction<string>) {
      state.flights.sort((a, b) => a[action.payload] - b[action.payload]);
    },
    filteredByFlights(state, action) {
      if (!action.payload) {
        return state.flights;
      } else {
        state.flights = state.flights.filter((item) => {
          console.log(action.payload);
          item.connectionAmount === action.payload;
          console.log(state.flights);
        });
      }
    },
  },
  // extraReducers: {
  //   [loadFligtsArray.pending]: (state) => {
  //     state.status = "loading";
  //     state.error = null;
  //   },
  //   [loadFligtsArray.fulfilled]: (state, actions) => {
  //     state.status = "resolved";
  //     state.flights = actions.payload;
  //   },
  //   [loadFligtsArray.rejected]: (state, actions) => {},
  // },
});

export const { sortByFlights, loadFlights, filteredByFlights } =
  flightsSlice.actions;
export default flightsSlice.reducer;
