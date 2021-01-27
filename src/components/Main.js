import React, {useState} from "react"
import axios from "axios"

import Context from "../Context"

import Header from "./Header"
import Content from "./Content"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"


const Main = () => {
    const[weather, setWeather] = useState()
    const [city, setCity] = useState()

    const api_call = async e => {
        // e is the event in JS. This e.preventDefault()
        // will prevent the refresh of the page in the browser
        e.preventDefault()
        
        const location = e.target.elements.location.value
        const API_KEY = "855195a766925822099e1656ec8594e0"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request

        setWeather(response.data.main)
        setCity(response.data.name)
    }

  weather && console.log(weather)


    return (
        <div className="main">
            <Header/>
            <Content>
              <Context.Provider value={{ api_call, weather, city }}>
              <WeatherSearch/>
                { weather && <WeatherData/>}
              </Context.Provider>
            </Content>
        </div>
    )
}

export default Main