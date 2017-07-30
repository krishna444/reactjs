import jQuery from 'jquery';
var cityList = require('./city.list.json');
const APPID = "49388ab64d987b4141722396747fad67";
const URL = "http://api.openweathermap.org/data/2.5/weather";

 export default class WeatherAPI {
    constructor() {        
 
    }

    getCityInfo(city, country) {
        let filteredList = cityList.filter(cityInfo => cityInfo.name == city && cityInfo.country == country);
        if(filteredList.length==0){
            console.error("CITY NOT FOUND");
            return;
        }
        return filteredList[0];
    }

    getWeather(id,callback) {
        let fetchURL = URL + "?id=" + id + "&appid=" + APPID;  
        console.log(fetchURL);
        jQuery.getJSON(fetchURL,callback)
    }
}
