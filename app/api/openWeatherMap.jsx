
var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=475181c7fb4a5c82b5969b05a5b1aa77&units=metric';

module.exports= {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log("url "+ requestUrl);
    return axios.get(requestUrl).then(function (res){
    //  console.log("++++++++++++++++++",res);
      if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
      }else {
        debugger;
        return res.data.main.temp;
      }
    },function (res) {
      console.log(res);
      throw new Error(res.data);
    });

  }
}
