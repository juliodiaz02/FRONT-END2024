export const getWeather = async (city) => {
    const key='310fb8da56a24b4aa88152918243005'
    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no&lang=es`
    const response= await fetch(url)

    const weather = await response.json()
    
    //console.log(weather.current.condition.text)
    return weather
}