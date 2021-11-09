const os = require('os')

//Info about current user
const user = os.userInfo()
//console.log(user);

//System uptime in seconds
const uptime = os.uptime();
//console.log(`The system uptime is: ${uptime}`);

const currentOS ={
    name: os.type(),
    release: os.release(),
    user: os.userInfo(),
    uptime: os.uptime(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
//console.log(currentOS);