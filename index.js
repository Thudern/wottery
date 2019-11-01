const express = require('express');

const app = express();

app.listen('8888', (req, res) => {
    console.log('server is running.');
});
