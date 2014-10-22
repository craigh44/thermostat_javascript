describe ('Thermostat', function (){

	var thermostat;

	beforeEach( function(){
			thermostat = new Thermostat;
		
	});

	describe ('By Default', function() {

		it('Should start at 20 degrees', function(){
			expect(thermostat.temperature).toEqual(20);
		});

		it("Power saving mode should be on", function(){
			expect(thermostat.isPowerSaverOn).toEqual(true);
		});

		it("it should be able to increase temperature by 1", function(){
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it("it should be able to decrease temperature by 1", function(){
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});

	});

	describe('Custom options', function(){

		it("Should be able to increase by 12", function(){
			thermostat.increaseTemperatureBy(12)
			expect(thermostat.temperature).toEqual(32)
		});

		it("Should be able to decrease by 7", function(){
			thermostat.decreaseTemperatureBy(7)
			expect(thermostat.temperature).toEqual(13)
		});

	});

});