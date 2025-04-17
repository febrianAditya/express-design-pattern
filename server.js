// ini tahap initiate express
const express = require("express")
const app = express()
const PORT = 3001
const routes = require("./routes")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(routes)
app.use(express.static("public"))

// STEP JANGAN LUPA DI LISTEN
app.listen(PORT, () => {
    console.log(`I LOVE YOU ${PORT}`);
    
})