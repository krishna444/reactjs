import jQuery from 'jquery';
var cityList = require('../../static/city.list.json');
var config = require('../../static/config.json');

const APPID = config.appId.weather;
const URL = "http://api.openweathermap.org/data/2.5/weather";

export default class WeatherAPI {
    constructor() {

    };

    getCountryList() {
        let countries = [];
        cityList.map(city => {
           // console.log(city)
            if (jQuery.inArray(city.country, countries) == -1) {
             //   console.log("inside");
                countries.push(city.country);
            }
        })
        return countries;
    };

    getCityInfo(city, country) {
        let filteredList = cityList.filter(cityInfo => cityInfo.name == city && cityInfo.country == country);
        if (filteredList.length == 0) {
            console.error("CITY NOT FOUND");
            return;
        }
        return filteredList[0];
    };

    getCities(country) {
        console.log("Getting cities for " + country);
        let filteredList = cityList.filter(cityInfo => cityInfo.country == country)
        if (filteredList.length == 0) {
            console.error("cities not found");
        }
        return filteredList;
    };

    getWeather(id, callback) {
        let fetchURL = URL + "?units=metric&id=" + id + "&appid=" + APPID;
        console.log(fetchURL);
        jQuery.getJSON(fetchURL, callback)
    }
}
