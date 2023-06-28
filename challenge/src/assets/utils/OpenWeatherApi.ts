async function getCurrentWeather(city: string) {

    const baseURL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = process.env.REACT_APP_API_KEY;

    try {
        const res = await fetch(`${baseURL}?q=${city}&appid=${API_KEY}`);
        const data = await res.json();
        return data;
    } catch(err) {
        console.log(err);
    }
    
}

export default getCurrentWeather;