import { tipList } from './TipDataProvider.js';
import { Tip } from './Tip.js';

export const MainTips = () => {
    const contentElement = document.querySelector(".fishTips");
    const lists = tipList();


    let tipHTMLRep = "";
    for(const list of lists) {
        tipHTMLRep += Tip(list);
    }

    contentElement.innerHTML += 
    `${tipHTMLRep}`




}