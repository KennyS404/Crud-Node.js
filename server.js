const path = require('path')
const express = require('express')
const hbs = require('hbs')
const routes = require('./public/controllers/routes')
const homeController = require('./public/controllers/homeController')

const app = express()
const port = 3000
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.resolve(__dirname, './public/views/task'))
app.use(express.urlencoded())

app.get('/', homeController.home)
app.get('/tasks', routes.list)
app.get('/tasks/form', routes.form)
app.post('/tasks/create', routes.create)
app.delete('/tasks/delete', routes.delete)


app.listen(port, () => {
    console.log(`The server is running on port ${port}.`)
})