import { ToolbarItemModel } from '@@portfolio/app-model';
import express from 'express';
const app = express()

app.get('', (req, res) => {
  const x: ToolbarItemModel = {
    path: 'home',
    title: 'Home',
  }
  res.send(x)
})


app.listen(9000,() => {
  console.log(`localhost:9000`)
})
