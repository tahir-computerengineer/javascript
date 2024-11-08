// Fibonacci dizisi, 0 ve 1 ile başlayan ve her sayının kendisinden önce gelen iki sayının toplanması ile elde edildiği bir sayı dizisidir.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,  89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, …


function fibonacciGenerator(n) {
	let output = [];
	let total = 0;
	
	output.push(0);
    output.push(1);		
	
	
	for(let i = 1; (i+1) < n ; i++) {		
			
		total = output[i] + output[i-1];
		
		output.push(total);	

	}
	
		return output;
}

console.log(fibonacciGenerator(22));
