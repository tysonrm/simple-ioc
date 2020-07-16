const FooAbstract = require('./foo-abstract');

class FooConcrete extends FooAbstract {
  bar() {
    console.log('concrete class');
  }
}

module.exports = new FooConcrete();
