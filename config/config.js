const process = require('process');
require('dotenv').config();

const sessionSecret = process.env.SESSIONSECRET

module.exports = {
    sessionSecret
}