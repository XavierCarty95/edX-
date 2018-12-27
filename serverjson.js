const http = require('http')
const url = "http://www.google.com/"
http.get(url, (response) =>{
    let buff = ""
    let c = 0
    response.on('data' , (chunk) => { 
    buff += chunk
    ++c
})
response.on('end', () => {
    console.log(buff, c)
})
response.on('error' , (error) =>{
    console.error('second error', error)
    
})
}).on ('error', (error) => {
    console.error('Got error: ${error.message}')
})
