import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ticket } from "@/common/config/interfaces/ticket.interface";

interface InitialState {
    ticket: Ticket | null
    allTickets: Ticket[] | null
    isLoading: boolean
    error: string | null
}

const initialState: InitialState = {
    ticket: null,
    allTickets: null,
    isLoading: false,
    error: null,
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        setTicket: (state, { payload }: PayloadAction<Ticket | null>) => {
            state.ticket = payload;
        },
        setAllTickets: (state, { payload }: PayloadAction<Ticket[]>) => {
            state.allTickets = payload;
        },
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        },
    },
});

export const { setTicket, setAllTickets, setIsLoading, setError } = ticketSlice.actions;
export default ticketSlice.reducer;