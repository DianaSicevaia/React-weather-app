import React, {useState} from "react"
import axios from "axios"

import Context from "../Context"

import Header from "./Header"
import Tagline from "./Tagline"
import Content from "./Content"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"
import DateTime from "./DateTime"
import Error from "./Error"
import Footer from "./Footer"

const Main = () => {
    const[weather, setWeather] = useState()
    const [city, setCity] = useState()
    const[error, setError] = useState()

    const api_call = async e => {
        // e is the event in JS. This e.preventDefault()
        // will prevent the refresh of the page in the browser
        e.preventDefault()
        
        const location = e.target.elements.location.value
        if (!location) return setError("Please enter the name of the city."), setWeather(null)
        const API_KEY = "855195a766925822099e1656ec8594e0"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request

        setWeather(response.data.main)
        setCity(response.data.name)
        setError(null)
    }

  weather && console.log(weather)


    return (
        <div className="main">
            <Header/>
            <Content>
                <Tagline/>
                <DateTime/>
              <Context.Provider value={{ api_call, weather, city, error }}>
              <WeatherSearch/>
                { weather && <WeatherData/>}
                { error && <Error error={error}/>}
              </Context.Provider>
              <Footer/>
            </Content>
        </div>
    )
}

export default Main