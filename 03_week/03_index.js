const express = require('express')
const app = express();
app.use(express.json())

app.post('/healthcheckup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.kidneyLength;

    res.send("you have "+kidneyLength+" kidneys. Things are looking fine")
});

// global catches only if there is an exception
app.use((err, req, res, next) => {
    res.json({
        msg: "something is up..."
    })
})

app.listen(3004);