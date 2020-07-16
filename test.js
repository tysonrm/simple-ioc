const {inject} = require('./injector');
const Foo = inject('./lib/foo-abstract');

console.log(Foo);

Foo.bar();
