// create basic http server using basic http server module

const http = require('http')

const server = http.createServer((req, res) => {
    res.write("Hey we are sending this response to you......")
    res.end();
})
server.listen(8080)
