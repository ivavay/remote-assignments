/* Calculate the result of the passing object*/

function calculate(args) {
    // Holds an array of values from the object args 
	const vals = Object.values(args)
    if (args.op == 'x') {
        return 'Not supported'
    } else {
        // Eval takes a string and use that string as a math operator
        // Teacher's note: using args.n1 and args.2 is more suitable to ensure it works regardless order of key: value pairs 
        return eval(`${args.n1} ${args.op} ${args.n2}`)
    }
}
console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' }));  // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' }));  // expected output: 'Not supported'