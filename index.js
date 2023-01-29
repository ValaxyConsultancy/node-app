const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Welcome to final git lab this is so tru i love devops !'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
