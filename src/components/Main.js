import React, {useEffect} from "react"
import axios from "axios"

import Header from "./Header"
import Content from "./Content"
import WeatherSearch from "./WeatherSearch"


const Main = () => {
    const api_call = async e => {
        // e is the event in JS. This e.preventDefault()
        // will prevent the refresh of the page in the browser
        e.preventDefault()
        
        const API_KEY = "855195a766925822099e1656ec8594e0"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Chișinău&appid=${API_KEY}`
        const request = axios.get(url)
        const response = await request
        console.log(response)
    }


    return (
        <div className="main">
            <Header/>
            <Content>
                <WeatherSearch api_call={api_call}/>
            </Content>
        </div>
    )
}

export default Main