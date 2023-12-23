const express = require('express')
const app = express();
app.use(express.json())

// user middleware
function userMiddleware(req, res, next) {
    const username = req.query.username;
    const password = req.query.password;

    if(username != "kamran" && password != "malik") {
        res.status(403).json({
            "msg": "User doesn't exist"
        });
    } else {
        next();
    }
};

// kidney middleware
function kidneyMidleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 || kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect Inputs"
        });
    }
    else{
        next();
    }
};

app.use(userMiddleware);
app.use(kidneyMidleware);

app.get('/health-check', userMiddleware, kidneyMidleware, (req, res) => {
    res.send("Your heart is healthy...")
});

app.get('/kidney-check', userMiddleware, kidneyMidleware, (req, res) => {
    res.send("Your kidneys are good")
});

app.get('/heart-check', userMiddleware, (req, res) => {
    res.send("Your kidneys are good")
});

app.listen(3003)