// modules . encapsulating code only share a minimum
// commonJS every file is a module


const names = require('./3-names')
const sayHi = require('./4-utils')
require('./5-mind-grendan')

console.log(typeof(sayHi))
sayHi('susan')
sayHi(names.jhon)
sayHi(names.peter)

// console.log(module)
console.log(names)
