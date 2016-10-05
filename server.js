var express = require('express');

// Create our app
var app = express();

const PORT = process.env.PORT || 3000;

app.use( function (req, res, next) {
  console.log("++++++++++++++",req.protocol);
  if ( req.protocol ='http' ) {
    next();
  } else {
      res.redirect('http://'+req.hostname + req.url)
  }
});
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port '+PORT);
});
