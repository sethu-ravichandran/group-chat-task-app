const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (request, response) => {
    response.status(200).send({message:`API is working!`})
})

app.listen(PORT, console.log(`Server started running at http://localhost:3500/`))