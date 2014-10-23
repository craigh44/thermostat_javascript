
$(document).ready(function(){
	var thermostat = new Thermostat;

	$.get('http://www.myweather2.com/developer/forecast.ashx?uac=UuJ5tIZAKz&output=json&query=SW1', function(data) {
		$('.outside_temp h2').text(data['weather']['curren_weather'][0]['temp'])})

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