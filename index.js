const express = require('express');  // import express
const app = express();  // initialize express
const cors = require('cors'); // import cors package
// import our strongman data
const strongmen = require('./data.js');
// Enable all CORS requests
app.use(cors());
app.get('/strongman', function (req, res) {
// store the query string parameter in strongman variable
  let yearOfCompetition = req.query.year;
// Loop through our strongman array
    for (let i = 0; i < strongmen.length; i++) {
// if no year exists
    if (!yearOfCompetition) {
      return res.send({"status": "error", "message": "Please enter a year"})
    } else if (yearOfCompetition == strongmen[i].year) {
      return res.send(strongmen[i])
    }
  }
// if year isn't in our set
  res.send({"status": "error", "message": "This year isn't in our database"})
});
app.listen(3000, function () {
  console.log('listening on port 3000...');
})