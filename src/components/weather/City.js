import React from 'react';
import WeatherAPI from './WeatherAPI'


export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = { country: undefined };
        this.weatherAPI = new WeatherAPI();
    };

    componentDidMount() {
        this.setState({ country: this.refs.country.options[this.refs.country.selectedIndex].text });
    }

    render() {
        const countries = this.weatherAPI.getCountryList();
        const selectCity = (
            <div className="container">
                <div>Enter Counry:<br /><select onChange={this.selectCountry.bind(this)} ref='country'>
                    {
                        countries.map(country => {
                            return <option>{country}</option>
                        })
                    }

                </select></div>
                <div>
                    Enter City:<CityList country={this.state.country} />
                </div>
            </div>

        );

        return (
            <div>
                {selectCity}
            </div>
        )
    };

    selectCountry() {
        this.setState({ country: this.refs.country.options[this.refs.country.selectedIndex].text });
    }


}


class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.weatherAPI = new WeatherAPI();
        this.state = { weather: undefined };
    }

    componentDidMount() {
        this.setState({ weather: undefined });
    }

    render() {
        let cities = this.weatherAPI.getCities(this.props.country);

        return (<div>
            <select onChange={this.refreshWeatherData.bind(this)} ref="city">
                <option value="" selected>Cities</option>
                {
                    cities.map(city => {
                        return <option key={city.name} value={city.name}>{city.name}</option>
                    })
                }

            </select>

            {this.state.weather && (
                <table className="table-striped">
                    <thead className="thead-default">
                        <tr>
                            <th>Parameters</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><h3>{this.state.weather.weather[0].description}</h3></tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{this.state.weather.main.temp} °C</td>
                        </tr>
                        <tr>
                            <td>Min Temperature</td>
                            <td>{this.state.weather.main.temp_min}  °C</td>
                        </tr>
                        <tr>
                            <td>Max Temperature</td>
                            <td>{this.state.weather.main.temp_max} °C</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{this.state.weather.main.pressure} mmHg</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{this.state.weather.main.temp_min} %</td>
                        </tr>
                        <tr><h5>Wind</h5></tr>
                        <tr><td>Speed</td><td>{this.state.weather.wind.speed} meter/sec</td></tr>
                        <tr><td>Direction</td><td>{this.state.weather.wind.deg} degree</td></tr>
                        <tr><td>Sunrise</td><td>{new Date(this.state.weather.sys.sunrise) + ""} </td></tr>
                        <tr><td>Clouds</td><td>{this.state.weather.clouds.all} %</td></tr>
                        <tr><td>Last Update</td><td>{this.state.weather.lastupdate} </td></tr>
                        <tr><td>Visibility</td><td>{this.state.weather.visibility} KMs </td></tr>
                    </tbody>
                </table>
            )}
        </div>);
    }

    refreshWeatherData() {
        console.log("refreshing...");
        let country = this.props.country;
        if (this.refs.city.options.length == 0) return;

        let city = this.refs.city.options[this.refs.city.selectedIndex].text;
        console.log(city);

        let cityInfo = this.weatherAPI.getCityInfo(city, country);
        if (!cityInfo) return;
        let weather = this.weatherAPI.getWeather(cityInfo.id, weather => {
            console.log(weather)
            this.setState({ weather: weather });
        });



    }
}