const numberSubmit = document.getElementById('submit')
numberSubmit.addEventListener('click', (event) => {

  event.preventDefault() 
  const numberInput = document.getElementById('number').value

  config = {
    method: 'POST', 
    headers: {
      'Content-type': 'application/text'
    }, 
    body: numberInput
  }
  fetch('/', config)
    .then(response => response.text())
    .then(data => {
        const messageDisplay = document.getElementById('message')
        messageDisplay.textContent = data
    }
     
  )
})