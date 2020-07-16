'use strict';

const injector = require('./injector');
let requireStartTime;

injector.on('beforeRequire', function () {
  requireStartTime = Date.now();
});

injector.on('afterRequire', function (path) {
  console.log(
    "Took %dms to require '%s'...",
    Date.now() - requireStartTime,
    path,
  );
});

injector.run('./server.js');
