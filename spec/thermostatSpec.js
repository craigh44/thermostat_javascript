describe ('Thermostat', function (){

	var thermostat;

	beforeEach( function(){
			thermostat = new Thermostat;
		
	});

	describe ('By Default', function() {

		it('it should start at 20 degrees', function(){
			expect(thermostat.temperature).toEqual(20);
		});

		it("it should be able to increase temperature by 1", function(){
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it("it should be able to decrease temperature by 1", function(){
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});

		it("it shouldn't be able to go below the minimum temp", function(){
			thermostat.decreaseTemperatureBy(10);
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(10);
		});

		it("it shouldn't be able to go over the maximum temperature", function(){
			thermostat.powerSaverOff();
			thermostat.increaseTemperatureBy(12);
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(32);
		});

		it("it should be able to reset back to 20", function(){
			thermostat.increaseTemperatureBy(2);
			thermostat.resetTemperature();
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe('Custom options', function(){

		it("it should be able to increase by 12", function(){
			thermostat.increaseTemperatureBy(12)
			expect(thermostat.temperature).toEqual(32)
		});

		it("it should be able to decrease by 7", function(){
			thermostat.decreaseTemperatureBy(7)
			expect(thermostat.temperature).toEqual(13)
		});

	});

	describe('power saver', function(){

		it("power saving mode should be on", function(){
			expect(thermostat.isPowerSaverOn).toEqual(true);
		});

		it("power saving mode should be able to be turned off", function(){
			thermostat.powerSaverOff();
			expect(thermostat.isPowerSaverOn).toEqual(false);
		});

		it("if on the max temperature is 25 degrees", function(){
			expect(thermostat.maximumTemp).toEqual(25);
		});

		it('should be able to turn the power saver back on', function(){
			thermostat.powerSaverOff();
			thermostat.powerSaverOn();
			expect(thermostat.isPowerSaverOn).toEqual(true);
		});

	});

});