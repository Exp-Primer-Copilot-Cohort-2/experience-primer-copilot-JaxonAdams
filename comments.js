// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// create comments array
let comments = [];

// get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// add comment
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(req.body);
});

// delete comment
app.delete('/comments/:id', (req, res) => {
    comments = comments.filter((comment, index) => index !== parseInt(req.params.id));
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
