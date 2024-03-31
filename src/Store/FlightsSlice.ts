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
  initpos: number;
};

const initialState: FlightsState = {
  flights: [],
  logos: [],
  status: "",
  error: null,
  initpos: 0,
};

// const urlAPI = `http://localhost:3001/fligths?_start=0&_limit=3`;

export const loadFligtsArray = createAsyncThunk(
  "flights/loadFligtsArray",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `http://localhost:3001/fligths?_start=0&_limit=3`
      );

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
  reducers: (create) => ({
    sortByFlights: create.reducer((state, action: PayloadAction<string>) => {
      console.log(action.payload);

      state.flights.sort((a, b) => a[action.payload] - b[action.payload]);
    }),
    filteredByFlights: create.reducer((state, action) => {
      console.log(action.payload);
      state.flights = state.flights.filter((item) => {
        item.connectionAmount == action.payload;
      });
    }),
    changeInitPosition: create.reducer((state, action) => {
      state.initpos += action.payload;
      console.log(state.initpos);
    }),
  }),
  extraReducers: (builder) => {
    builder
      .addCase(loadFligtsArray.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadFligtsArray.fulfilled, (state, action) => {
        state.status = "resolved";
        state.flights = action.payload;
      })
      .addCase(loadFligtsArray.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { sortByFlights, filteredByFlights, changeInitPosition } =
  flightsSlice.actions;
export default flightsSlice.reducer;
