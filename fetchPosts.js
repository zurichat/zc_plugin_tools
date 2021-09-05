
const env = require("../config/env");
const logger = require("../config/logger");

const { InternalServerError } = require("../lib/errors");
async function fetchPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()

    console.log(json);
}


module.exports = fetchPost
