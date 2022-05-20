const express = require('express')
const path = require('path')

const app = express()

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "./public")))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/do', (req, res) => {
    res.render('work')
})


app.get('/myscore', (req, res) => {
    res.render('cabinet/myscore')
})


app.get('/login', (req, res) => {
    res.render('login')
})


app.get('/register', (req, res) => {
    res.render('register')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`PORT ${PORT} is listening..`)
})