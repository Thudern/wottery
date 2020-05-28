const express = require('express');

const app = express();

// release v2
app.listen('8888', (req, res) => {
    console.log('server is running.');
});
