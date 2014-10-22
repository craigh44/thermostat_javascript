function Thermostat () {
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minimumTemp = 10;
	this.maximumTemp = 25;
}

Thermostat.prototype.increaseTemperature = function(first_argument) {
	if(this.temperature === this.maximumTemp)
		this.increaseTemperatureBy(0);
	else
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

Thermostat.prototype.resetTemperature = function() {
	this.temperature = 20;
};

Thermostat.prototype.powerSaverOff = function() {
	this.maximumTemp = 32;
	this.isPowerSaverOn = false;
};

Thermostat.prototype.powerSaverOn = function() {
	this.maximumTemp = 25;
	this.isPowerSaverOn = true;
};

