const EventEmitter = require('events');

class Job extends EventEmitter {}
const job = new Job()

job.on('done', function(timeDone){
    console.log('Job was pronouced done at', timeDone)
})

job.emit('done', new Date())
job.removeAllListeners()