import express from 'express';
const app = express()

app.get('', (req, res) => {
  res.send('Backend works')
})


app.listen(9000,() => {
  console.log(`localhost:9000`)
})
