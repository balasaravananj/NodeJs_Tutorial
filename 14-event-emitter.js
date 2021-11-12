const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(user,id)=>{
    console.log(`data received: User-${user},Id-${id}`)
})

customEmitter.on('response',()=>{
    console.log('New data received')
})

customEmitter.emit('response','bala',10)