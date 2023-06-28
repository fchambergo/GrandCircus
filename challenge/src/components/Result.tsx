//Child component to receive and display data
function Result ({weather}: any) {
    const data = weather.data;
    
    //Bind data to properties passed on by parent component
    const { feels_like, temp } = data.main;
    const { description } = data.weather[0];
    const { speed } = data.wind;
    const city = data.name;

    return (
        <section>
            <h3>{city}</h3>
            <p>Description: {description}</p>
            <p>Current temp: {temp}</p>
            <p>Feels like: {feels_like}</p>
            <p>Wind speed: {speed}</p>
        </section>
    )
}

export default Result;