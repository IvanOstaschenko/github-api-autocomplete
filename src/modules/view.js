import AutoCompleteItem from "../components/AutoCompleteItem";
import createHTMLElement from "../utility/createHTMLElement"
import ResultItem from "../components/ResultItem";

export default class View{
    constructor(container) {
        this.container = container;
        this.input = null;
        this.autoCompleteBlock = null;
        this.resultBlock = null;
        this.createDefaultMarkup();
    }
    createDefaultMarkup(){
        const wrapper = createHTMLElement('div','wrapper')
        this.input = createHTMLElement('input','custom-input');
        this.autoCompleteBlock = createHTMLElement('div','autocomplete-block');
        this.resultBlock = createHTMLElement('div','result-block');
        wrapper.append(this.input,this.autoCompleteBlock,this.resultBlock);
        this.container.append(wrapper);
        this.container.classList.add('app');
    }
    clearAutoCompleteBlock(){
        this.autoCompleteBlock.innerHTML = "";
    }
    updateSearch(arr){
        this.clearAutoCompleteBlock();
        if (arr.length!==0){
            arr.forEach((i)=>{
                this.autoCompleteBlock.append(AutoCompleteItem(i));
            })
        }
    }
    updateResult(obj){
        this.resultBlock.append(ResultItem(obj));
        this.input.value='';
        this.clearAutoCompleteBlock();
    }
}
