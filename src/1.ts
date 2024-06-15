export function rollDice(quantity) {
	return Array.from({ length: quantity }, () => {
		let result = Math.floor(Math.random() * 6) + 1;
		return "⚀⚀⚁⚂⚃⚄⚅"[result];
	});
}

export function calculate(x, sign, y) {
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

export function toBoolean(array) {
	return array.map((x) => Boolean(x));
}
