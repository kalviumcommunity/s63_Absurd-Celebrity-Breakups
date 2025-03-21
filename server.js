require('dotenv').config();  // Make sure this line is at the top
const express = require("express");
const mongoose = require('mongoose')
const app = express();
const port = 3000;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));


// Simple ping route
app.get("/ping", (req, res) => {
  res.send("Pong!");
});



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
