const express = require('express');
const cors = require('cors');
const path = require('path');
const port = 3000;
const app = express();
require('newrelic')

// For dev purposes
// const morgan = require('morgan');
// app.use(morgan('dev'));

app.get('/loaderio-46e763be2c2b9fccdfbb3f2dd9144742.txt', (req, res) => {
	res.sendFile('/home/ubuntu/SDC-Jenny-Photos/loaderio-46e763be2c2b9fccdfbb3f2dd9144742.txt');
});

app.use(cors());
app.use(express.static(`${__dirname}/../public`));
app.use('/:id', express.static(`${__dirname}/../public`));

app.listen(port, () => console.log(`listening on port ${port}`));