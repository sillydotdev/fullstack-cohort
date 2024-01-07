const express = require('express')

const app = express();

app.get('/health-checkup', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    const kidneyId = req.query.kidneyId

    if(username != "kamran" && password != "malik") {
        res.status(403).json({
            "msg": "User doesn't exist"
        })
        return
    }
    if(kidneyId != 1 || kidneyId != 2) {
        res.status(400).json({
            "msg": "something up with your kidneys"
        })
        return
    }
    res.json({
        "msg": "Your kidneys is fine"
    })
});

app.listen(3004)

