function ajax(url) {
  // Get the product data
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function render(data) {
    // Convert to JSON
    let newData = JSON.stringify(data);
    // console.log(newData)
    for (let item in data) {
      console.log(data[item].name);

      let names = document.querySelectorAll(".name");
      // console.log(names)
      names.forEach((element, item) => {
        element.innerHTML = data[item].name;
      });
      let desc = document.querySelectorAll(".description");
      // console.log(names)
      desc.forEach((element, item) => {
        element.innerHTML = data[item].description;
      });
      let prices = document.querySelectorAll(".price");
      // console.log(names)
      prices.forEach((element, item) => {
        element.innerHTML = data[item].price;
      });
    }
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
