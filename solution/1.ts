export function rollDice(quantity: number) {
	return Array.from({ length: quantity }, () => {
		let result = Math.floor(Math.random() * 6) + 1;
		return "⚀⚀⚁⚂⚃⚄⚅"[result];
	});
}
type Sign = "+" | "-" | "*" | "/";

export function calculate(x: number, sign: Sign, y: number) {
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

export function toBoolean(array: Array<unknown>) {
	return array.map((x) => Boolean(x));
}
