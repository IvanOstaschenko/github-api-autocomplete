import createHTMLElement from "../utility/createHTMLElement";

const ResultItem = (obj)=>{
    const element = createHTMLElement('div','result-item');
    for(let key in obj){
        const el = createHTMLElement('div');
        el.innerText = `${key}: ${obj[key]}`;
        element.append(el);
    }
    const  closeEl = createHTMLElement('button','close-btn');
    closeEl.addEventListener('click',()=>element.remove(),{once:true});
    element.append(closeEl);
    return element;
}

export default ResultItem;
