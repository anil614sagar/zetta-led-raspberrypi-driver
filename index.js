var util = require('util');
var Device = require('zetta-device');
var gpio = require('rpi-gpio');


var LED = module.exports = function(led) {
  this.led = led;
  this.pin =  Array.prototype.slice.call(arguments);
  Device.call(this);
};
util.inherits(LED, Device);

LED.prototype.init = function(config) {
  config
    .type('led')
    .state('off')
    .name(this.led)
    .when('off', { allow: ['turn-on'] })
    .when('on', { allow: ['turn-off'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff);
};

LED.prototype.turnOn = function(cb) {
  this.state = 'on';
  console.log("The pin is: " + this.pin)
  this.WritePin(this.pin, true)
  
  cb();
};

LED.prototype.WritePin = function(pin, state) {
	gpio.setup(pin, gpio.DIR_OUT, write);
	
	function write() {
	    gpio.write(pin, state, function(err) {
	        if (err) throw err;
	        console.log('Written to pin' + pin);
	    });
	}
	
}

LED.prototype.turnOff = function(cb) {
  this.state = 'off';
  this.WritePin(this.pin, false)

     
  cb();
};
