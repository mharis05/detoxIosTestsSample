const detox = require('detox');
const config = require('../package.json').detox;

before(async () => {
  await detox.init(config);
});

beforeEach(async () => {
  await device.relaunchApp();
});

after(async () => {
  await detox.cleanup();
});