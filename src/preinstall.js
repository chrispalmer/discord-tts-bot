const fs=require(‘fs’);


let buff = new Buffer(process.env.GOOGLE_CREDENTIALS_BASE64, 'base64');

fs.writeFile(‘../config/google-credentials-heroku.json’, buff.toString('ascii'), (err) => {});