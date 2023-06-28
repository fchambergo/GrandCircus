// This function gets the current weather data from the api and returns the data
async function getCurrentWeather(city: string) {

    const baseURL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = process.env.REACT_APP_API_KEY; //Get API KEY from hidden .env file

    try {
        //Fetch data from api
        const res = await fetch(`${baseURL}?q=${city}&appid=${API_KEY}&units=imperial`);
        const data = await res.json();
        return data;
    } catch(err) {
        console.log(err);
    }
    
}

export default getCurrentWeather;