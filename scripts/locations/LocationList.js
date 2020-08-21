import { dataLocation } from './LocationDataProvider.js';
import { htmlLocation} from './Location.js';

export const locationList = () => {

const contentElement = document.querySelector(".places");
const locations = dataLocation();

let locationHTMLRepresentation = "";
for (const loc of locations) {
    locationHTMLRepresentation += htmlLocation(loc);
}

contentElement.innerHTML += `
    ${locationHTMLRepresentation}
`


}