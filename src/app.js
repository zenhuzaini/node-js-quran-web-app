const express = require('express')
const app = express()
const port = process.env.PORT || 1996

//import route
const route = require('./router/quranroutes')
app.use('/quran', route)

app.get('/', (req, res) => {
    res.json({
        title: "home page",
        description: "Welcome to our homepage",
    })
})

app.listen(port, () => {
    console.log('connected to : ', port)
})

