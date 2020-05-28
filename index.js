const express = require('express');

const app = express();

// dev v8
app.listen('8888', (req, res) => {
    console.log('server is running.');
});
