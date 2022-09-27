const connectMongo = require('./db');
const express = require('express');
connectMongo();
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Chal gyi at ${port}`)
})