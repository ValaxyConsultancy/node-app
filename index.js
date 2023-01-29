const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Love is a complex and multifaceted emotion that can be described in many different ways. At its core, love is a feeling of deep affection and connection towards someone or something. It is an intense emotion that can be both joyful and painful, and it is something that is deeply ingrained in human nature !'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
