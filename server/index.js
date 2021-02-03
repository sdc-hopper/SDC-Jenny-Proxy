const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const port = 3000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/../public`));

app.use('/:id', express.static(`${__dirname}/../public`));

// app.get('/:id', (req, res) => {
//   const file = path.join(__dirname, '../public/index.html');
//   res.sendFile(file);
// });




app.listen(port, () => console.log(`listening on port ${port}`));