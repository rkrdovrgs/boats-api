import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as api from "./api";

var port = process.env.PORT || 3000;
var app = express();

app.use("/node_modules", express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public/dist')));

//Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

api.configureRoutes(app);
app.use((req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port, function () {
    console.log('Server started in port:' + port);
});