import Result from "./Result";
import getCurrentWeather from "../assets/utils/OpenWeatherApi";
import { useState } from "react";

function Form() {
    const [data, setData] = useState();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const cityField = e.target.city;
        const city = cityField.value;

        const weather = await getCurrentWeather(city);
        setData(weather);
    }

    return (
        <main>
            <section id="formContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city">City</label>
                    <input name="city" id="city"/>
                    <button type="submit" id="searchBtn">Search</button>
                </form>
                
            </section>
            {data && 
                <Result weather={{data}} />
            }
            
        </main>
        
    )
}

export default Form;