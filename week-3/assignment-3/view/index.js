// const form = document.querySelector('form')
// form.addEventListener('submit', postData)

// // Using the fetch API 
// function postData(e) {
//   const inputValue = document.getElementById("number").value

//   e.preventDefault()
//   console.log(inputValue)

//   const config = {
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     // Converts JS objects into strings
//     body: JSON.stringify({ number: inputValue })
//   }

//   fetch('/sum.html', config)
//     .then(res => res.json())
//     .then(data =>{ 
//       console.log(data)
//       // Right now this takes the submitted number and display it as the message
//       document.getElementById("message").innerHTML = data.number
//     })
// }

