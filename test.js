const wdio = require('webdriverio');

//javascript
const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.1.0",
    deviceName: "Android Emulator",
    app: "/Users/adrianlopez/Downloads/ApiDemos-debug.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);

//javascript
client
  .init()
  .click("~App")
  .click("~Alert Dialogs")
  .back()
  .back()
  .end();