const bodyParser = require("body-parser");
const express = require("express")
const app = express();
// const bodyParser = require(body-par)
app.use(express.json())

let users = [{
    name: "Danish",
    age: 41,
    kidneys: [{
        healthy: true
    }, {
        healthy: false
    }]

}, 
{
    name: "Basit",
    age: 49,
    kidneys: [{
        healthy: true
    },{
        healthy: false
    }]   
}];

// GET method
app.get('/getDetails', (req, res) => {
    const health = users[0].kidneys;
    console.log(health);

    const numberOfKidneys = users[0].kidneys.length;
    console.log(`Number of kidneys is: ${numberOfKidneys}`);

    const healthyKidneys = users[0].kidneys.filter((kidney) => (kidney == true))
    console.log(healthyKidneys);

    res.json({
        health,
        numberOfKidneys,
        healthyKidneys
    })
})

// POST method
app.post('/addDetails', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[1].kidneys.push({
        healthy: isHealthy
    })
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

// PUT method
app.put('/updateDetails', (req, res)=> {
    for(let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    console.log(users[0]);
    res.json({
        msg: "Updated"
    })
})

// DELETE method
app.delete('/delete', (req, res) => {
    if(isThereAtleastOneUnhealthyKindey()) {
        const newKidney = [];
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidney
    console.log(newKidney);
    res.json({
        msg: "Deleted unhealthy kidneys"
    })
    }
    else {
        res.status(411).json({
            msg: "You have no unhealthy kidneys..."
        })
    }   
})

// check if there is no unhealthy kidney
function isThereAtleastOneUnhealthyKindey() {   // We can use this function in the about DELETE route
    let atleastOneUnhealthyKindey = false;
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKindey = true;
        }
    }
    return atleastOneUnhealthyKindey;
}

app.listen(3007)