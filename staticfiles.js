const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// You can also specify a virtual path prefix
app.use('/static', express.static('public'));

// Using absolute path (recommended)
app.use('/assets', express.static(path.join(__dirname, 'public')));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 