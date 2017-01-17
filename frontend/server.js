var express = require('express');
var app = express();
app.use(express.static('./dest'));
app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/dest/index.html');
});
app.listen(8080);