import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

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
  connetions: number[];
  status: string;
  error: any;
  initpos: number;
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
    { name: "Победа", value: "pobeda", filtredBy: false },
    { name: "Red Wins", value: "redwings", filtredBy: false },
    { name: "S7 Airlines", value: "s7", filtredBy: false },
  ],
  connetions: [],
  status: "",
  error: "",
  initpos: 0,
};
// const urlAPI = `http://localhost:3001/fligths?_start=3&_limit=3`;

export const loadFligtsArray = createAsyncThunk(
  "flights/loadFligtsArray",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`http://localhost:3001/fligths`);

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    sortByFlights(state: FlightsState, action: PayloadAction<number>) {
      state.flights = state.flightsConteiner.sort(
        (a, b) => a[action.payload] - b[action.payload]
      );
    },
    filtredByCompany(state: FlightsState, action: PayloadAction<string>) {
      state.flights = state.flightsConteiner.filter(
        (item: ITicket) => item.company === action.payload
      );
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

      !state.connetions.includes(action.payload)
        ? state.connetions.push(action.payload)
        : (state.connetions = state.connetions.filter(
            (item) => item !== action.payload
          ));

      !state.connetions.length
        ? (state.flights = state.flightsConteiner)
        : (state.flights = state.flightsConteiner.filter((item) =>
            state.connetions.some(
              (transfer) => transfer == item.connectionAmount
            )
          ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFligtsArray.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadFligtsArray.fulfilled, (state, action) => {
        state.status = "resolved";
        state.flights = action.payload;
        state.flightsConteiner = action.payload;
      })
      .addCase(loadFligtsArray.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { sortByFlights, filtredByCompany, filtredByConnections } =
  flightsSlice.actions;
export default flightsSlice.reducer;
