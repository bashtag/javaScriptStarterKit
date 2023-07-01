function	primeOrNot(...nums) { // rest
	return nums.filter((num) => {
		let	isPrime = true;
		if (num <= 2)
			isPrime = false;
		else {
			for (i = 2; i <= num / 2; ++i) {
				if (num % i == 0) {
					isPrime = false
					break
				}
			}
		}
		return (isPrime)
	});
}
let arr = Array.from({length: 100000}, (_, i) => i + 1)
console.log(primeOrNot(...arr))
