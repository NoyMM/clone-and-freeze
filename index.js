const cloneAndFreeze = require('./clone-and-freeze');


obj = {"name": "Noy"};
copyObj = cloneAndFreeze.cloneAndFreeze(obj);
copyObj.name = "Guy";
console.log(obj.name, copyObj.name);