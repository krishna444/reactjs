import React from 'react';
import jQuery from 'jquery';
import WeatherAPI from '../WeatherAPI'


export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.refreshWeatherData = this.refreshWeatherData.bind(this);
        this.state = { weather: undefined };
        this.weatherAPI = new WeatherAPI();
    };

    componentDidMount() {
       this.refreshWeatherData();     
    }

    render() {
        const selectCity = (
            <div>Enter Counry:<select onChange={this.refreshWeatherData} ref='country'>
                <option>NP</option>
            </select>
                Enter City:<select onChange={this.refreshWeatherData} ref='city'>
                    <option>Butwal</option>
                    <option>Birganj</option>
                    <option>Bhadrapur</option>
                    <option>Banepa</option>
                    <option>Baglung</option>
                    <option>Birendranagar</option>
                    <option>Bhairahawa</option>
                </select>
                <button onClick={this.refreshWeatherData}>Display</button>
            </div>
        );
      
        return (
           
            <div>
                {selectCity}
                {this.state.weather && this.state.weather.main.temp-273.15}

            </div>
        )
    };

    refreshWeatherData() {
        console.log("refreshing...");       
        let country = this.refs.country.options[this.refs.country.selectedIndex].text;
        let city = this.refs.city.options[this.refs.city.selectedIndex].text;
       
        let cityInfo = this.weatherAPI.getCityInfo(city, country);
        console.log(cityInfo);
        let weather = this.weatherAPI.getWeather(cityInfo.id, weather => {

            console.log(weather)
            this.setState({ weather: weather });
        });
       


    }
}
