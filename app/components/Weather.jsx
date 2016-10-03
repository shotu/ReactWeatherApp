var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    // alert("locaion is"+location);

    debugger;
    var that = this;
    this.setState({
      isLoading:true
    })
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      })

    }, function (err) {
      that.setState({
        isLoading:false
      });
      alert(err);
    })


  },
  render: function () {
    var {isLoading,temp, location} = this.state;

    function renderMessage() {
      debugger;
      if(isLoading){
        return <h1> Fetching weather......</h1>;
      }else if (temp && location) {
        return   <WeatherMessage temp={temp} location={location} />
      }
    }

    return (
      <div>
        <h3> Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}

      </div>
    )}
});

module.exports = Weather;
