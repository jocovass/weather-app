const fs = require('fs');

fs.writeFileSync('./.env', `APIKEY=${process.env.APIKEY}\n`,
                           `PROXY=${process.env.PROXY}\n`);