const dotenv = require('dotenv');
const path = require('path');
console.log(__dirname);
dotenv.config({
    path: path.resolve(__dirname, '../../.env'),
});