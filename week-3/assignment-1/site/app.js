const express = require('express')
const app = express()
// Parse requests with JSON payloads
app.use(express.json())
// Define the server code 
const port = 3000

app.get('/getData', (req, res) => {
  try {
    let number  = req.query.number;
    const arrayItems = []
    for (let i = 1; i <= number; i++) {
        arrayItems.push(i)
    }
    let calculation = arrayItems.join('+')
    // Sends the queried number as the '1+2+3+4+5' as a response 
    res.send(calculation)
  }

 catch (error) {
    res.send('Lack of Parameter')
    }
  } 
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



