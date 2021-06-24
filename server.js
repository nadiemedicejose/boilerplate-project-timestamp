// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

/**
 * TODO: Your project can handle dates that can be successfully parsed by `new Date(date_string)`
 */
app.get("/api/:date?", (req, res) => {
  const date_string = req.params.date;
  let isValid = new Date(date_string);

  if (isValid != 'Invalid Date') {
    /**
     * TODO: Return `unix` key in milliseconds.
     * TODO: Return `utc` key in the format: `Thu, 01 Jan 1970 00:00:00 GMT`
     * TODO: Request `/api/1451001600000` returns `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`
     */
    res.json({
      unix: new Date(date_string).valueOf(),
      utc: new Date(date_string).toUTCString()
    });
  } else {
    let milliseconds = new Date(parseInt(date_string)).valueOf();

    if (parseInt(date_string) == milliseconds) {
      res.json({
        unix: milliseconds,
        utc: new Date(parseInt(date_string)).toUTCString()
      });
    } else {
      if (date_string == null) {
        /**
         * TODO: An empty date parameter should return the current time in a JSON object with a `unix` key
         * TODO: An empty date parameter should return the current time in a JSON object with a `utc` key
         */
        res.json({
          unix: new Date().valueOf(),
          utc: new Date().toUTCString()
        });
      } else {
        /**
         * TODO: If the input date string is invalid, the api returns an object having the structure `{ error : "Invalid Date" }`
         */
        res.json({
          error: "Invalid Date"
        });
      }
    }
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
