const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories.js')
const citiesData = require('./data/cities.js')
const itemsData = require('./data/items.js')

// Express app is created here
// Require the packages to run this application

const app = express()

// Create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, '/public')))

// API
// Shows all cities available
app.get('/api/cities', function (req, res) {
  res.json(citiesData)
})

// Shows all categories for a city
app.get('/api/:city', function (req, res) {
  res.json(categoriesData)
})

// This shows all items for a category
app.get('/api/:city/:category', function (req, res) {
  console.log(req.params.city)
  const newData = itemsData.filter((item) => {
    return item.city == req.params.city &&
    item.category == req.params.category
  })
  res.json(newData)
})

// Show all items for a listing
app.get('/api/:city/:categories/:listing', function (req, res) {
  res.json(itemsData)
})

// Shows item which was selected
app.get('/api/:city/:categories/:listing/:item', function (req, res) {
  res.json(itemsData)
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})
// Setting up a route (such as localhost:3000)
// Telling the server to run this application from this public folder using Express

// Create default port to serve the app
const port = process.env.PORT || 5000
// Telling the server to run on localhost:5000

app.listen(port)
// Telling Express to listen to the port number which comes from hosting company or to previous port listed such as localhost:5000

console.log('server started on port' + port)
