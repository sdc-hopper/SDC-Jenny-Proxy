const express = require('express');
const port = 3000;
const app = express();

app.use(express.static(`${__dirname}/../public`));


app.listen(port, () => console.log(`listening on port ${port}`));