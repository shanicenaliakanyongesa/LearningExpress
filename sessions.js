const express=require("express")
//express-session: Helps us manage sessions.
const session=require("express-session")
// body-parser: Helps us read data sent by forms (like username/password).
const bodyParser=require("body-parser")
const app=express()

// Middlewares- get req.body from form data or JSON.
// A middleware is a function that runs before your routes
app.use(bodyParser.json())
// library used to read the body of incoming HTTP requests
app.use(bodyParser.urlencoded({extended : true}))


// Set up sessions-stores user info on the server.
app.use(session({
  secret: 'h7Y2k9@!34sdKfjw93nfVlkjQ#123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Dummy user

const users = [
  { id: 1, username: 'user1', password: 'password1' }
];



// user login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  req.session.user = {
    id: user.id,
    username: user.username
  };

  res.json({ message: 'Login successful', user: req.session.user });
});


// Protected Route
app.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.json({ message: 'Profile accessed', user: req.session.user });
});


// logout clears the users session 
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.json({ message: 'Logout successful' });
  });
});


// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});
