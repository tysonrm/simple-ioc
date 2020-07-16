'use strict';

class FooAbstract {
  bar() {
    throw Error('abstract method must be overridden');
  }
}

module.exports = FooAbstract;
