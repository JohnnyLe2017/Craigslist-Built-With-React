const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories.js')

// Express app is created here
// Require the packages to run this application

const app = express()

// Create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, '/public')))
app.get('/api/categories', function (req, res) {
  res.json(categoriesData)
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
