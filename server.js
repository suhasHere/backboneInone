var express = require('express'),
    path = require('path'),
    http = require('http');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

// 1. Retrieve all the users from prepopulated database 
app.get('/users', function(req, res) {
    res.send(populateDB());

});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});


/* Fake users DB */
var populateDB = function() {

    var users = [
    {
        name: "Alice",
        year: "2009",
    },
    {
        name: "Bob",
        year: "2006",
    },
    {
        name: "Carl",
        year: "2010",
    },
    {
        name: "Dorothy",
        year: "2009",
    },
    {
        name: "Fluffy",
        year: "2009",
    },
    {
        name: "Crypt",
        year: "2007",
    },
    {
        name: "Steve",
        year: "2005",
    },
    {
        name: "Ralph",
        year: "2009",
    },
    {
        name: "Smith",
        year: "2009",
    },
    {
        name: "Amanda",
        year: "2007",
    },
    {
        name: "Betty",
        year: "2011",
    },
    {
        name: "Lias",
        year: "2009",
    },
    {
        name: "Roger",
        year: "2009",
    },
    {
        name: "Danny",
        year: "2008",
    }];

    return users;
};
