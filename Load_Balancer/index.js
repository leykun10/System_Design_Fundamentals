const app = require('express')()
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Server with port ${port}`)
})

app.listen(port, () => {
    console.log("started listening")
})