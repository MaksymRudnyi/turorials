const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('public'));

app.post('/demo', (req, res) => res.status(200).send({demo: true}));

app.listen(8000, () => {
    console.log('App is running on port 8000')
});