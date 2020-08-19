
const fishCollection = [
	{
		image: "Fish1.jpg",
		givenName: "Bart",
		size: "5 inches",
		diet: "crustaceans",
		species: "Clownfish",
		harvestLocation: "Petco"
	},
	{
		image: "Fish1.jpg",
		givenName: "Big Mac",
		size: "6 feet",
		diet: "jellyfish",
		species: "Giant sunfish",
		harvestLocation: "Sam's Club Reef"
	},
	{
		image: "Fish1.jpg",
		givenName: "Squigle",
		size: "2 feet",
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck"
	},
	{
		image: "Fish1.jpg",
		givenName: "Hammy",
		size: "4 feet",
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot"
	},
	{
		image: "Fish1.jpg",
		givenName: "Tiny",
		size: "1 inch",
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck"
	}
];

export const useFish = () => {
    return fishCollection.slice();
}