// built-in module

// os module
// path module
// FS module
// HTTP MODULE

const os = require('os')

const user = os.userInfo()
console.log(user)


console.log(`The uptime is ${os.uptime()} seconds`)


const currentUser = {
    name: os.type(),
    releas: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentUser)