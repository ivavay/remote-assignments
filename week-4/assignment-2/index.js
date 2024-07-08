function ajax(url) {
  // Get the product JSON successfully
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Convert to JSON
      return data
    })
    .catch((error) => {
      console.log(error);
    });
}

function render(data) {
  ajax(url).then((data) => {
    let newData = JSON.stringify(data)
    // console.log(newData)
    for (let item in data) {
        console.log(data[item].name)
       
        let names = document.querySelectorAll(".name")
        // console.log(names)
        names.forEach((element, item) => {
            element.innerHTML = data[item].name
        })
        let desc = document.querySelectorAll(".description")
        // console.log(names)
        desc.forEach((element, item) => {
            element.innerHTML = data[item].description
        })
        let prices = document.querySelectorAll(".price")
        // console.log(names)
        prices.forEach((element, item) => {
            element.innerHTML = data[item].price
        })
        // document.querySelectorAll(".description").innerHTML = data[item].description
        // document.querySelectorAll(".price").innerHTML = data[item].price
        }
  })
  // Where you render data to the page
  // ajax(url).then(data => console.log(data))
  //   console.log(data[0].name);
  //   data[0].name
  //   document.getElementsByClassName("name").textContent = data[0].name;
  //   console.log(data[0].name)
  //   for (let item in data) {
  //     console.log(item.name)
  //     console.log(data[0].name)
  //     document.getElementsByClassName('name').textContent = item.name
  //     document.getElementsByClassName('description').textContent = item.description
  //     document.getElementsByClassName('price').textContent = item.price
  //     }
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
