/**
 * Example Pokédex data
[
	{
		"id": 3,
		"name": "Venusaur",
		"type": ["Grass", "Poison"],
		"height": "2.01 m",
		"weight": "100.0 kg",
		"weaknesses": ["Fire", "Ice", "Flying", "Psychic"]
	},
	{
		"id": 6,
		"name": "Charizard",
		"type": ["Fire", "Flying"],
		"height": "1.70 m",
		"weight": "90.5 kg",
		"weaknesses": ["Water", "Electric", "Rock"]
	},
	{
		"id": 9,
		"name": "Blastoise",
		"type": ["Water"],
		"height": "1.60 m",
		"weight": "85.5 kg",
		"weaknesses": ["Electric", "Grass"]
	}
]
**/

interface PokemonInterface {
	id: number;
	name: string;
	type: Array<string>;
	height: string;
	weight: string;
	weaknesses: Array<string>;
}

export function findByType(pokedex: Array<PokemonInterface>, type: string): PokemonInterface[] {
	// ???
	const pokeSelection: PokemonInterface[] = [];
	for (let poke of pokedex) {
		if(poke.type.includes(type)) {
			pokeSelection.push(poke);
		}
	}
	return pokeSelection
}
