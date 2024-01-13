const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser')
app.use(express.json())
app.get('/', (req, res) => {
    res.send('My name is iHaveNoIdea')
})

app.get('/request-handler', (req, res) => {
    res.json({
        myName: "iHaveNoIdea",
        age: 22,
        profession: "Twitter User"
    })
})

app.use(bodyParser.json());
app.post('/body', (req, res) => {
    console.log(req.body);
})

app.post('/conversations/message', (req, res) => {
    const message = req.query.message;
    console.log(message);
    res.json({
        output: "my name is kamran"
    })
})

app.listen(port, () => {
    console.log(`The port is: ${port}`);
})