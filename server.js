var express = require('express');

// Create our app
var app = express();

const PORT = process.env.PORT || 3000;


app.use(function (req, res, next) {

  console.log(JSON.stringify(req.headers,null,2));

  if ( req.headers['x-forwarded-proto'] === 'http' ) {
    next();
  } else {
      res.redirect('http://'+ req.hostname + req.url)
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port '+PORT);
});
