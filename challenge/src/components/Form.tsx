import Result from "./Result";
import getCurrentWeather from "../assets/utils/OpenWeatherApi";
import { useState } from "react";

function Form() {
    //Set state of data
    const [data, setData] = useState();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        //Get value of input field
        const cityField = e.target.city;
        const city = cityField.value;

        //Use API call to get weather data
        const weather = await getCurrentWeather(city);
        setData(weather); //Set weather data to state data
    }

    return (
        <main id="mainContainer">
            {/* Form Container */}
            <section id="formContainer">
                {/* City Form */}
                <form onSubmit={handleSubmit}> {/* Event call */}
                    <label htmlFor="city">City</label>
                    <input name="city" id="city"/>
                    <button type="submit" id="searchBtn">Search</button>
                </form>
                
            </section>
            {/* If data is present, show the child Result component. If not, then hide it */}
            {data && 
                <Result weather={{data}} />
            }
            
        </main>
        
    )
}

export default Form;