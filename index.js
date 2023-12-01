const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs');

const Profile = require('./services/profile')

const userRouters = require('./routers')

app.set("view engine", "ejs") 
app.use(express.urlencoded({ extended: true }))

app.use("/libs", express.static(path.join(__dirname, "node_modules")))
app.use("/static", express.static(path.join(__dirname, "public")))



 


app.use(userRouters)

// Sunucu PORT 3000 ile sabitleme
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

