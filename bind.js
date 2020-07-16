'use strict';

const moduleBindings = require('./bindings')

class Bind {
  constructor(bindings) {
    this.bindings = bindings;
  }

  findBinding(modulePath) {
    const files = modulePath.split('/');
    const LAST = files.length - 1;
    const moduleName = files[LAST];

    if (this.bindings.has(moduleName)) {
      files[LAST] = this.bindings.get(moduleName);
      return files.join('/');
    }
    return modulePath;
  }
}

module.exports = new Bind(moduleBindings);
