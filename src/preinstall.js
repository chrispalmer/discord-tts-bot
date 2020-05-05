const fs = require('fs');
const { Logger } = require('logger');

const logger = new Logger();

// let buff = new Buffer(process.env.GOOGLE_CREDENTIALS, 'base64');

fs.writeFile('../config/google-credentials-heroku.json', process.env.GOOGLE_CREDENTIALS_RAW, (err) => {
	logger.error(`Error writing credentials file: ${err}`);
});