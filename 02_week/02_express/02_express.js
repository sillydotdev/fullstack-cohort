const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const bodyParser = require('body-parser')

app.use('/', express.static(path.resolve(__dirname, '')))  // ' ' = means current folder

app.use(bodyParser.json())
app.post('/data', (req, res) => {
    console.log(req.body);
    res.json({ status: 'OK' })
})

// app.get('/file', (req, res) => {
//     res.sendFile(
//         path.resolve(__dirname, 'index.html')
//     )
// })

// app.get('/', (req, res) => {
//     res.send("my name is Kamran...")
// })

// app.post('/something', (req, res) => {
//     res.response('This is usually not visible...')
// })

app.listen(port, () => {
    console.log(`The port number is: ${port}`);
})