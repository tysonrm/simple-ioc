'use strict'

class ConnectDb {
    connect () {
        throw Error('abstract method must be overridden')
    }
}

module.exports = ConnectDb;