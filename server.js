const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("<div>Hello it's me</div>")
})

app.get('/main', (req, res) => {
    res.send('lol 123');
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))