import React from 'react'
import { Guest, Hero, Message, Locations, Countdown, DressCode } from '..'

export const Invitation: React.FC = () => {
    return (
        <div>
            <div id="invitation">
                <div id="hero"><Hero /></div>
                <div id="countdown"><Countdown /></div>
                <div id="message"><Message /></div>
                <div id="guest"><Guest /></div>
                <div id="locations"><Locations /></div>
                <div id="dress-code"><DressCode /></div>
                {/* <div id="itinerary"><Itinerary /></div>
                <div id="graduates"><Graduates /></div> */}
            </div>
        </div>
    )
}
