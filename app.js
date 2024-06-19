const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); 
});

app.use((req, res, next) => {
    console.log('Second middleware function is runninga');
    next(); 
});

app.get('/', (req, res) => {
    res.send('Main Page!');
});

app.get('/users', (req, res) => {
    res.send('User Page!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});