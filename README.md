# remote-assignments
🍫  assignments for appworks school

Week 1 (6/17-6/23)
- Assignment 2 - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-1/assignment-2) / [Live site](https://ivavay.github.io/remote-assignments/week-1/assignment-2/)
- Google Developers clone - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-1/google-developers/) / [Live site](https://ivavay.github.io/remote-assignments/week-1/google-developers/)

🗒️ Takeaways: 
- Tried developing mobile-first for the first time!
- To do horizontal scroll in css, simply add `overflow:auto` and `white-space: nowrap` to your parent container
- If a website doesn't let you save images, go to dev tools > applications > frames > images 

Week 2 (6/24-6/30)
- Assignment 1 - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-2/assignment-1)
- Assignment 2 - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-2/assignment-2)
- Assignment 3 - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-2/assignment-3)
- Assignment 4 - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-2/assignment-4) / [Live site](https://ivavay.github.io/remote-assignments/week-2/assignment-4/)
- Assignment 5 (Advanced Optional) - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-2/assignment-5)

🗒️ Takeaways:
- Use `eval()` to evaluate a string as a math operation
- Use a toggle function for showing/hiding mobile menu 
- Nested loops are helpful for comparing or doing operations with the current and next item/index

Week 3 (7/1-7/7)
- Assignment 1 - Your first web server - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-3/assignment-1)
- Assignment 2 - Build backend API for frontend - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-3/assignment-2)
- Assignment 3 - Connect to Backend API by AJAX - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-3/assignment-3)
- Assignment 4 - Deploy Web Server (Advance Optional) - [Live site](https://remote-assignments-week3.onrender.com/sum) 


🗒️ Takeaways:
- This `Object.keys(req.query).length === 0)` checks if a query is empty
- `<%= locals?.message %>` is helpful for injecting a variable into EJS 
- Assignment 3 was a bit hard to wrap my head around but I mainly used GET to render the sum form page and POST to do the logic with the inputted number and return with the value
- Needed to install and use bodyparser to process form data 
- Using AJAX / Fetch API means that you can submit/process a form without refreshing the page
- To start server, `node view/app.js`

Week 4 (7/8-7/14)
- Assignment 1 - Callback Function - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-4/assignment-1)
- Assignment 2 - HTML DOM and AJAX - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-4/assignment-2) / [Live site](https://ivavay.github.io/remote-assignments/week-4/assignment-2/)
- Assignment 3 - Re-implement Layout React - [Code](https://github.com/ivavay/remote-assignments/tree/main/week-4/assignment-3) / [Live site](https://week-4-assignment-3.vercel.app/)
- Assignment 4 - HTML DOM and AJAX (Advanced Optional) - [Live site](https://week-4-assignment-4.vercel.app/)
- Assignment 5 - Counter by React (Advanced Optional) 

🗒️ Takeaways:
- Used `forEach` inside of `for...in` to loop through rendering each object item's values
- Common usages of hooks 
    - useState is the most often used hook
    - useEffect for fetching data via API and re-rendering after state changes
    - useRef for directly changing DOM without re-renders or state changes 
    - context api for passing props at the top-level 
- To keep span elements from overlapping, change to `display: inline-block;`