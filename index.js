'use strict';

module.exports = {
    Option: require('./interface/rustify-option.h'),
    Result: require('./interface/rustify-result.h'),
    registerAllGlobals: require('./src/rustify.registerAllGlobals.c'),
};
