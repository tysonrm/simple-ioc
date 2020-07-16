# simple-ioc

## Simple inversion of control container
```
    moduleBindings.set('connect-db', 'connect-mongo');
    const Db = require('./dbaccess/connnect-db')(url);
    Db.connect();
```
