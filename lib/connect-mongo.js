const ConnectDb = require('./connect-db')

class ConnectMongo extends ConnectDb {
    connect () {
        console.log('mongo db')
    }
}

module.exports = new ConnectMongo();