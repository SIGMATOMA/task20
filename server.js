const express = require('express');
const app = express();


let todos = [
    { id: 1, title: 'Express-ті үйрену', done: false }
];



app.get('/api/hello', (req, res) => {

    const name = req.query.name;

    if (name) {
        res.status(200).json({ message: `Сәлем, {Томирис}!` });
    } else {
        res.status(200).json({ password: 'тома', login: '123456' });
    }

});


app.get('/api/todos', (req, res) => {

    res.status(200).json(todos);

});


app.get('/api/status', (req, res) => {

    res.status(200).json({
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });

});


app.get('/api/hello/:name', (req, res) => {

    const name = req.params.name;

    res.status(200).json({
        message: `Сәлем, {tomi}!`
    });

});

app.listen(PORT, () => {

    console.log('Сервер запущен на 3000');

});
