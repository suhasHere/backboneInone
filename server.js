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


app.get('/api/v0/user/', function(req, res) {
    //var data = { version:"0.0", response:[] };

    var data = {
        version:"0.0",
        response:[ 
            {
                mgmtDeviceIpAddress:"26.6.6.2",
                mgmtSlotNum: 1,
                userId:"kyedaval",
                identityId:"e77db4e5-8201-4a00-8bf8-4fefdface05b",
                updateTime:"December 4, 2013 1:48:34 PM PST",
                vlanId: [],
                macAddress:"00:1B:21:D4:B9:C2",
                mgmtModuleNum: 0,
                mgmtPortNum: 7 ,
                status:"Active"
            },
            {
                mgmtDeviceIpAddress:"26.6.6.3",
                mgmtSlotNum: 2,
                userId:"fluffy",
                identityId:"e77db4e5-8201-4a00-8bf8-4fef4567e05b",
                updateTime:"December 4, 2013 1:48:34 PM PST",
                vlanId: [],
                macAddress:"00:1B:21:D4:FL:FL",
                mgmtModuleNum: 0,
                mgmtPortNum: 8 ,
                status:"Active"
            }
        ] };

    res.send( data );
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
