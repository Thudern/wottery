const express = require('express');

const app = express();

// dev v7
app.listen('8888', (req, res) => {
    console.log('server is running.');
});
