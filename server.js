const express = require('express');
const app = express();
const routes = require('./routes');
const Foo = require('./lib/foo-abstract');
const Db = require('./lib/connect-db');

Foo.bar();
Db.connect();

app.use('/', routes);

app.listen(3000);

console.log('Express server listening on port 3000...');
