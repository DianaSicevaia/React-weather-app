import React, {useEffect} from "react"
import axios from "axios"

import Header from "./Header"

const API_KEY = "855195a766925822099e1656ec8594e0"


const Main = () => {
    const api_call = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Chișinău&appid=${API_KEY}`
        const request = axios.get(url)
        const response = await request
        console.log(response)
    }

    useEffect(() => {
        api_call()
    }, [])

    return (
        <div className="main">
            <Header/>
        </div>
    )
}

export default Main