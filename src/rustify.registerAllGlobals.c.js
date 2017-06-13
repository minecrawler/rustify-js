'use strict';

const me = require('../index');

me.registerAllGlobals = function () {
    for (let mod in me) {
        if (
            typeof mod === 'object'
            && typeof mod.registerGlobals === 'function'
        ) {
            mod.registerGlobals();
        }
    }
};
