const fs = require('fs');

fs.writeFileSync('./.env', `APIKEY=${process.env.APIKEY}\n`);
fs.writeFileSync('./.env', `PROXY=${process.env.PROXY}\n`);
