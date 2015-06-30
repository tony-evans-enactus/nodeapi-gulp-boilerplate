
var env = process.env.NODE_ENV || 'development',
	config = require('./'+ env);


module.exports = config;


module.exports.expressSessionSecret = 'vX8Zp6jUcjS8jc0d1k6VaO';
