const _ = require('lodash');


function cloneAndFreeze(obj) {
    const deepCopy = _.cloneDeep(obj);
    return Object.freeze(deepCopy);
}

module.exports.cloneAndFreeze = cloneAndFreeze;