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
app.set('view engine', 'ejs')
app.set('views', __dirname);

// Serving static files in express
app.use(express.static('view'))

// Gets the sum page 
app.get('/sum', (req, res) => {
  res.render('sum')
  } 
)
// Renders the form and processes it 
app.post('/sum', (req, res) => {
  try {
    // Makes sure the number is an integer
    const number = parseInt(req.body.inputNum);
    
    // If query is a positive number
    if (Number.isInteger(number) && number > 0) {
      const arrayItems = []
      // Loop through and add each index as a item in the array 
      for (let i = 1; i <= number; i++) {
          arrayItems.push(i)
      }
      
      // Add the items together 
      let calculation = arrayItems.reduce((sum, value) => sum + value, 0)
  
      console.log(calculation)

      // Renders the calculated sum as the message
      res.render('sum', {'message': calculation})
  
      // If there is no parameter, meaning the form submits nothing 
    } else if (Object.keys(req.body.inputNum).length === 0) {
      throw new Error ('Lack of Parameter!!')
    
      // If number parameter isn't an integer, then...
    } else {
      throw new Error('Wrong Paramter!!')
    }
  }
 catch (error) {
    res.render('sum', {'message': error.message})
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



