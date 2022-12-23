const express = require('express');

const app = express();

const port = 8080;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/homepage.html')
})

//Listen on port 8080
app.listen(port, () => console.info(`Let's code on http://localhost:${port} !!`))


