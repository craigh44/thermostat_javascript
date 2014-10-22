function Thermostat () {
	this.temperature = 20;
	this.isPowerSaverOn = true;
}

Thermostat.prototype.increaseTemperature = function(first_argument) {
	this.increaseTemperatureBy(1)
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function(first_argument) {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees){
	this.temperature -= degrees;
};