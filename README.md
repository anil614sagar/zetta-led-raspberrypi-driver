#Raspberry Pi LED Device

This is a LED device for use in the Zetta platform.

##Installation

`npm install zetta-led-raspberrypi-driver` 

##Usage

You must run node as sudo for this release. 

To use simply call the `use()` function in your code to use this device with the argu of the pin number

```javascript
var zetta = require('zetta');
var LED = require('zetta-led-raspberrypi-driver');

zetta()
  .use(LED,7) // User LED on GPIO Pin 7
  .listen(1337);
```
