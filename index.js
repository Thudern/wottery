const express = require('express');

const app = express();

// dev v9
app.listen('8888', (req, res) => {
    console.log('server is running.');
});
