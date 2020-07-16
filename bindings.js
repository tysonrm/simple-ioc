const moduleBindings = new Map();

moduleBindings.set('foo-abstract', 'foo-concrete');
moduleBindings.set('connect-db', 'connect-mongo');



module.exports = moduleBindings;
