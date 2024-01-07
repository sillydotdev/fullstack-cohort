const express = require('express')
const zod = require('zod')
const app = express();
app.use(express.json())

const schema = zod.array(zod.number())


// ZOD on objects
// const myObj = {
//     email: "abc@gmail.com",
//     username: "Kamran",
//     password: "aBc123@"
// }

// const schema = z.object({
//     email: zod.string().email(),
//     username: zod.string(),
//     password: zod.string().min(8)
// })


app.post('/healthcheckup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success) {
        res.status(411).json({
            msg: "Invalid input"
        })
    }
    else{
        res.send({
            response
        })
    }
});

// global catches only if there is an exception
app.use((err, req, res, next) => {
    res.json({
        msg: "something is up..."
    })
})

app.listen(3004);