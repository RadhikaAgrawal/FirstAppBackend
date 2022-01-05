const express = require('express' )
const app = express()
const port = 3001
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  console.log(req);  
  res.send({returning:"success"})
})

app.post('/', (req, res) => {
    res.send({returning:"success from Post"})
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  

app.use(express.static('public'))
