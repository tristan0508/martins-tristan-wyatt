
const fishCollection = [
	{
		image: "Fish1.jpg",
		givenName: "Bart",
		size: 5,
		diet: "crustaceans",
		species: "Clownfish",
		harvestLocation: "Petco"
	},
	{
		image: "Fish2.jpg",
		givenName: "Big Mac",
		size: 6,
		diet: "jellyfish",
		species: "Giant sunfish",
		harvestLocation: "Sam's Club Reef"
	},
	{
		image: "Fish3.jpg",
		givenName: "Squigle",
		size: 2,
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck"
	},
	{
		image: "Pink.jpg",
		givenName: "Hammy",
		size: 4,
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot"
	},
	{
		image: "Purple.jpg",
		givenName: "Tiny",
		size: 2,
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck"
	},
	{
		image: "Purple.jpg",
		givenName: "Tiny",
		size: 3,
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck"
	},
	{
		image: "Fish3.jpg",
		givenName: "Squigle",
		size: 9,
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck"
	},
	{
		image: "Pink.jpg",
		givenName: "Hammy",
		size: 15,
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot"
	}
];

export const useFish = () => {
    return fishCollection.slice();
}

export const makeMostHolyFish = () => {
	//3,6,9
	const mostHolyFishArray = [];
	
	for(const theFish of fishCollection) {
		if(theFish.size % 3 === 0) {
			mostHolyFishArray.push(theFish);
		}
	}
	
	return mostHolyFishArray;
}

export const makeSoldierFish = () => {
	//5,10
	const soldierFishArray = [];
	for (const fishObj of fishCollection) {
		// divisible by 5 but dont include the 3
		if(fishObj.size % 5 === 0 && fishObj.size % 3 !== 0) {
			soldierFishArray.push(fishObj);
		}
	
	}
	return soldierFishArray;
}

export const makeUnworthy = () => {
	//not divisible by 3 or 5
	const unworthyArray = [];
	for(const fishObj of fishCollection) {
		if(fishObj.size % 5 !== 0 && fishObj.size % 3 !== 0){
			unworthyArray.push(fishObj);
		}
	}
	
	return unworthyArray;
}