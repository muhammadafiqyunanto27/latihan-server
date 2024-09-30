// memanggil library
const http = require('http')

// bikin server
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Assalamualaikum Santri...')
})

// menghidupkan server
server.listen(3000,() => {
    console.log('hidupkan: node index.js')
    console.log('buka di browser: http://localhost:3000')
    console.log('matikan server" tekan ctrl + c di terminal')
})