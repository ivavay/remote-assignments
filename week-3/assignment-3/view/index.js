// Getting the form element
const form = document.querySelector("form");
form.addEventListener("submit", postData);

// Fetch API
function postData(e) {
  // console.log('HI')
  e.preventDefault(e);
  const number = document.getElementById("number").value;
  // console.log(number)
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Convert to JSON format
    body: JSON.stringify({ number: number }),
  };

  const url = "/sum";

  fetch(url, config)
    .then((response) => response.json())
    .then((data) => {
      // If there is a error message from data, throw that custom err
      if (data.message) {
        console.error("custom error please");
        throw new Error(data.message);
      }
      document.getElementById("message").textContent = data.sum;
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("message").textContent = error.message;
    });
}
