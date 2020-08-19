export const Fish = (fishObj) => {
    return `
<ul class="ulfish">
    <img src="images/${fishObj.image}" alt="${fishObj.givenName}">
    <li><strong class="emphasize">Given Name:</strong>${fishObj.givenName}</li>
    <li><strong class="emphasize">Species:</strong>${fishObj.species}</li>
    <li><strong class="emphasize">Length:</strong>${fishObj.length}</li>
    <li><strong class="emphasize">Diet:</strong>${fishObj.diet}</li>
    <li><strong class="emphasize">Harvest Location:</strong>${fishObj.harvestLocation}</li>
</ul>
    `
}
