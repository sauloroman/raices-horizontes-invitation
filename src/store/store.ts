import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './ui/modal.slice'
import menuReducer from './ui/menu.slice'
import musicReducer from './ui/music.slice'
import ticketReducer from './ticket/ticket.slice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        menu: menuReducer,
        music: musicReducer,
        ticket: ticketReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch