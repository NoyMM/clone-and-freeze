const _ = require('lodash');


function cloneAndFreeze(obj) {
    const deepCopy = _.cloneDeep(obj);
    return Object.freeze(deepCopy);
}

module.exports.cloneAndFreeze = cloneAndFreeze;


obj = {"name": "Noy"};
copyObj = cloneAndFreeze(obj);
copyObj.name = "Guy";
console.log(obj.name, copyObj.name);