function Thermostat () {
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minimumTemp = 10;
}

Thermostat.prototype.increaseTemperature = function(first_argument) {
	this.increaseTemperatureBy(1)
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function(first_argument) {
	if(this.temperature === this.minimumTemp) 
	this.decreaseTemperatureBy(0);
else 
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees){
	

	this.temperature -= degrees;
};