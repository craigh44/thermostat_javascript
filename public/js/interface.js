
$(document).ready(function(){
	var thermostat = new Thermostat;


var apiSetter = function () {
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/find?q=London&units=metric',
    type: 'GET',
    dataType: 'jsonp',
    success: function(data) { 
    	console.log(data),
      $('.outside_temp h2').text(data.list[1].weather[0].description);
    }
  });
}
  apiSetter()


	$('.increase_temp').on('click', function(){
		$('.thermostat h1').text(thermostat.increaseTemperature());
	});

	$('.decrease_temp').on('click', function(){
		$('.thermostat h1').text(thermostat.decreaseTemperature());
	});

	$('.reset_temp').on('click', function(){
		$('.thermostat h1').text(thermostat.resetTemperature());
	});

	$('.power_saver_on').on('click', function(){
		$('.thermostat h2').text(thermostat.powerSaverOn());
		$('.thermostat h1').text(thermostat.temperature);
	});

	$('.power_saver_off').on('click', function(){
		$('.thermostat h2').text(thermostat.powerSaverOff());
	});

});

