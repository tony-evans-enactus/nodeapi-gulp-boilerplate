
 /**
  * Created by tevans on 6/30/2015.
  */


 var express 			= require('express');
 var expressSession 		= require('express-session');
 var cookieParser		= require('cookie-parser');
 var bodyParser			= require('body-parser');
 var config 				= require('./app/config');
 var morgan              = require('morgan');


 var app = express();

 app.use(morgan('dev'));
 app.use(express.static('app/static'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(cookieParser());





 console.log('Configuration: ' + config.env);

 var port = process.env.port || 3000;
 app.listen(port, function() {
     console.log('Listening on port: ' + port);
 });
