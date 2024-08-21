import createHTMLElement from "../utility/createHTMLElement";

const AutoCompleteItem = ({name,arrIndex}) => {
    // let {name,arrIndex} = obj;
    const element = createHTMLElement('button','autocomplete-item');
    element.innerText = name;
    element.dataset.arrIndex = arrIndex;
    return element;
}

export default AutoCompleteItem;
