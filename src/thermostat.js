function Thermostat () {
	this.temperature = 20;
	this.isPowerSaverOn = "Power saver on";
	this.minimumTemp = 10;
	this.maximumTemp = 25;
}

Thermostat.prototype.increaseTemperature = function(first_argument) {
	if(this.temperature === this.maximumTemp)
		this.increaseTemperatureBy(0);
	else
	return this.increaseTemperatureBy(1)
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function(first_argument) {
	if(this.temperature === this.minimumTemp) 
	this.decreaseTemperatureBy(0);
else 
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees){
	return this.temperature -= degrees;
};

Thermostat.prototype.resetTemperature = function() {
	return this.temperature = 20;
};

Thermostat.prototype.powerSaverOff = function() {
	this.maximumTemp = 32;
	return this.isPowerSaverOn = "Power saver off";
};

Thermostat.prototype.powerSaverOn = function() {
	if (this.temperature > 25){this.temperature = 25};
	this.maximumTemp = 25;
	return this.isPowerSaverOn = "Power saver on";
};

