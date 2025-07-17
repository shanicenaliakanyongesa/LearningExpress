const express = require('express');
const app = express();
const port = 8080;

// Respond to GET request on the root route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Respond to POST request on the /home route
app.post('/home', (req, res) => {
  res.send('POST request to the /home route');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Example dynamic route with parameter
app.get('/user/:id', (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// Catch all other routes
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
