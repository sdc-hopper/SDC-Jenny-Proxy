const express = require('express');
const cors = require('cors');
const path = require('path');
const port = 3000;
const app = express();

// For dev purposes
// const morgan = require('morgan');
// app.use(morgan('dev'));

app.use(cors());
app.use(express.static(`${__dirname}/../public`));
app.use('/:id', express.static(`${__dirname}/../public`));

app.listen(port, () => console.log(`listening on port ${port}`));