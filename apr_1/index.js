const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    date: new Date()
  })
});

app.post('/', (req, res) => {
    res.json({
        message: 'parsed',
        data: req.body
    })
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);