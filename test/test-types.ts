import { calculate } from "../src/1.js";
import { findByType } from "../src/3.js";

function expectType<T>(value: T): void {}

type ExpectedSign = "+" | "-" | "*" | "/";
type ExpectedCalculate = (x: number, sign: ExpectedSign, y: number) => number;

expectType<ExpectedCalculate>(calculate);

type ExpectedPokemon = {
	id: number;
	name: string;
	type: Array<string>;
	height: string;
	weight: string;
	weaknesses: Array<string>;
};

type ExpectedFindByType = (
	expectedPokedex: Array<ExpectedPokemon>,
	expectedType: string
) => Array<ExpectedPokemon>;

expectType<ExpectedFindByType>(findByType);
