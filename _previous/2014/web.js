var newrelic = require('newrelic'),
    express = require('express'),
    app = express();

app.use(function(req, res, next){
    if (req.url.match(/\.(jpg|png|css|js)$/)) {
        res.setHeader("Cache-Control", "public, max-age=604800"); // 7 days
        res.setHeader("Expires", new Date(Date.now() + 604800000).toUTCString());
    }
    next();
});
app.use(express.compress());
app.use('/', express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 3000, function() {
    console.log('listening');
});
