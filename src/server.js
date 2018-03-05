'use strict'
// ===============
// IMPORTS
const path = require('path')
const express = require('express')

// ===============
// SERVER CONFIG
const server = express()
const port = process.env.PORT || 3000

// ===============
// VIEW - HANDLEBARS
server.set('view engine', 'html')
server.use(express.static(path.join(__dirname)))

// ===============
// ROUTES
server.get('/', (req, res) => {
  res.render('home')
});

server.use((req, res, next) => {
  console.log('Looking for URL: ' + req.url)
  next()
});

server.get('/about', (req, res) => {
  res.render('about')
});

server.get('/profile', (req, res) => {
  // TODO: change to render
  res.send('profile')
});

server.get('/contacts', (req, res) => {
  // TODO: change to render
  res.send('contacts')
});

// Error Handling
// URL Not Found
server.use((req, res) => {
  res.type('text/html')
  res.status(404)
  res.send('404')
});

// Server Error
server.use((req, res) => {
  res.type('text/html')
  res.status(500)
  res.send('500')
});

// ===============
// SERVER START
server.listen(port, () => {
  console.log(`Running @:${port} ...`)
});
