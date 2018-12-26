const EventEmitter = require('events')

class Emitter extends EventEmitter {}
const emitter = new Emitter ()

emitter.on('knock' , function() {
    console.log("Who's there?")
})

emitter.on('knock', function() {
   console.log("gO AWAY!")  
})

emitter.emit('knock')
emitter.removeAllListeners()
emitter.emit('knock')