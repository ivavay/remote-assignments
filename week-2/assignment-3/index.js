/* Complete the function below to calculate the total price of all products after applying a discount. */

function calculate(data) {
    let priceTag = []
    let totalPrice = 0;
	let items = Object.values(data.products)
    for (let item in items) {
        // Push each item's value into an array 
        priceTag.push(items[item].price);
        totalPrice += priceTag[item];
    }
    // Calculate the discount 
    let discount = totalPrice * (data.discount)
    totalPrice = totalPrice - discount
    return totalPrice
}

const discountedPrice = calculate({
	discount: 0.1,
	products: [
		{
			name: "Product 1",
			price: 100
		},
		{
			name: "Product 2",
			price: 700
		},
		{
			name: "Product 3",
			price: 250
		}
	]
});
console.log(discountedPrice) // show the total price of all products after applying a discount