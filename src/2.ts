type Square = {
	kind: "square";
	size: number;
};

type Rectangle = {
	kind: "rectangle";
	width: number;
	height: number;
};

type Circle = {
	kind: "circle";
	radius: number;
};

type Shape = Square | Rectangle | Circle;

export function area(shape: Shape): number {
	// Return the area for each kind of shape
	switch (shape.kind) {
		case "square":
			return shape.size * shape.size;
		case "rectangle":
			return shape.width * shape.height;
		case "circle":
			return Math.PI * shape.radius * shape.radius;
		default:
			throw new Error(`Unknown shape '${shape}'`);
	}
}
