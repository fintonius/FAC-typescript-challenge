export function rollDice(quantity: number) {
	return Array.from({ length: quantity }, () => {
		let result = Math.floor(Math.random() * 6) + 1;
		return "⚀⚀⚁⚂⚃⚄⚅"[result];
	});
}

// IN THE BELOW 'sign' SHOULD BE SEPARATED OUT INTO IT'S OWN TYPE
export function calculate(x: number, sign: '+'|'-'|'*'|'/', y: number) {
	switch (sign) {
		case "+":
			return x + y;
		case "-":
			return x - y;
		case "*":
			return x * y;
		case "/":
			return x / y;
		default:
			throw new Error(`Unknown sign '${sign}'`);
	}
}

// THIS SHOULD BE 'unknown' RATHER THAN 'number'
export function toBoolean(array: Array<number>) {
	return array.map((x) => Boolean(x));
}
