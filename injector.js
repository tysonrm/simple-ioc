'use strict';

const vm = require('vm');
const fs = require('fs');
const path = require('path');
const Bind = require('./bind');

const eventHandlers = {
  beforeRequire: [],
  afterRequire: [],
};

const moduleParentDirectory =
  module.parent.filename.split('/').slice(0, -1).join('/') + '/';

function runHandlers(eventName, args) {
  eventHandlers[eventName].forEach(handler => handler(args));
}

/**
 *
 * @param {NodeRequire} originalRequire
 */
function injectDependency(originalRequire) {
  const newRequire = function (modulePath) {
    const firstCharacter = modulePath.substr(0, 1);
    if (firstCharacter === '/' || firstCharacter === '.') {
      modulePath = path.resolve(moduleParentDirectory + modulePath);
    }
    runHandlers('beforeRequire', [modulePath]);
    const localModule = originalRequire(Bind.findBinding(modulePath));
    runHandlers('afterRequire', [modulePath]);
    return localModule;
  };

  for (const property in originalRequire) {
    newRequire[property] = originalRequire[property];
  }

  return newRequire;
}

module.exports.inject = injectDependency(require);

module.exports.on = function on(eventName, handler) {
  eventHandlers[eventName].push(handler);
};

module.exports.run = function runInNewContext(modulePath) {
  const fnString = fs.readFileSync(
    path.resolve(moduleParentDirectory + modulePath),
  );

  const context = {
    require: module.exports.inject,
    console: console,
    exports: {},
    module: {
      exports: {},
    },
    process: process,
  };

  vm.runInNewContext(fnString, context);
};
