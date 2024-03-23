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
  connectionAmount: number | null;
}
export interface TicketTime {
  startTime: string;
  endTime: string;
}

export interface IFilter {
  title: string;
  type: string;
  filterType: string;
}
