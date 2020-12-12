const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

const server = app.listen(8080, () => {
    let port = server.address().port;
    console.log("Express APP is running on Port:", port);
});