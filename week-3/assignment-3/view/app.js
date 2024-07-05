const express = require('express')
const app = express()
// Body parser to parse form data 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// Parse requests with JSON payloads
app.use(express.json())
// Define the server code 
const port = 3000
// Set default engine 
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
app.set('views', __dirname);

// Serving static files in experss
app.use(express.static('view'))


app.get('/sum', (req, res) => {
  res.render('sum')
  } 
)

app.post('/sum', (req, res) => {
  // Returns a JSON like { number: '4' } 
  // res.send(req.body)
  // Try and catch works now
  try {
    // Makes sure the number is an integer
    const number = req.body.inputNum;
    
    // If query is a positive number
    if (number > 0) {
      const arrayItems = []
      // Loop through and add each index as a item in the array 
      for (let i = 1; i <= number; i++) {
          arrayItems.push(i)
      }
      
      // Add the items together 
      let calculation = arrayItems.reduce((sum, value) => sum + value, 0)
  
      // Sends the queried number as the '1+2+3+4+5' as a response 
      // Convert calculation value to a string
      // res.json(' + calculation')
      console.log(calculation)
      res.render('sum', {'message': calculation})
      // res.render('sum', {'sum': calculation})

    } else if (Object.keys(req.body.number).length === 0) {
      throw new Error ('Lack of Parameter')
    
      // If number parameter isn't an integer, then...
    } else {
      throw new Error('Wrong Paramter!!')
    }
  }
 catch (error) {
    res.send(error.message)
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



