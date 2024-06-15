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
}
