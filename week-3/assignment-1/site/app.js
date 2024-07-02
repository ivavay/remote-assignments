const express = require('express')
const app = express()
// Parse requests with JSON payloads
app.use(express.json())
// Define the server code 
const port = 3000

app.get('/getData', (req, res) => {
  // Try and catch works now
  try {
    // Makes sure the number is an integer
    let number = parseInt(req.query.number);
    // If query is not a number 
    if(Number.isInteger(number)) {
      const arrayItems = []
      // Loop through and add each index as a item in the array 
      for (let i = 1; i <= number; i++) {
          arrayItems.push(i)
      }
      // Join the items in the array via '+'
      let calculation = arrayItems.join('+')
      // Sends the queried number as the '1+2+3+4+5' as a response 
      res.send(calculation)
    } else {
      throw new Error('Lack of Parameter')
    }
    
  }

 catch (error) {
    res.send(error.message)
    }
  } 
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



