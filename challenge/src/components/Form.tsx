import getCurrentWeather from "../assets/utils/OpenWeatherApi";

function Form() {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const cityField = e.target.city;
        const city = cityField.value;

        const data = await getCurrentWeather(city);
        console.log(data);
    }

    return (
        <section id="formContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">City</label>
                <input name="city" id="city"/>
                <button type="submit" id="searchBtn">Search</button>
            </form>
        </section>
    )
}

export default Form;