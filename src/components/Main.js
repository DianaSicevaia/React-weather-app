import React from "react"
import Header from "./Header"

const API_KEY = "855195a766925822099e1656ec8594e0"
const url = "api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

const Main = () => {
    return (
        <div className="main">
            <Header/>
        </div>
    )
}

export default Main