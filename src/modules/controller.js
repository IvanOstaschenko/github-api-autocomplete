export default class Controller{
    constructor(model,container) {
        this.model = model;
        this.container = container;
        this.listeners();
    }
    listeners(){
        const input = this.container.querySelector('.custom-input');
        input.addEventListener('input',this.debounce(this.inputHandler.bind(this), 2000).bind(this))
        this.container.addEventListener('click',this.buttonHandler.bind(this));
    }
    inputHandler(e){
        this.model.updateSearch(e.target.value);
    }
    buttonHandler(e){
        if (e.target.classList.value === 'autocomplete-item'){
            this.model.updateResult(e.target.dataset.arrIndex);
        }
    }
    debounce(originalFn, timeoutMs) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout); // очищаем таймер каждый новый вызов
            timeout = setTimeout(() => originalFn(...args), timeoutMs); // вызываем исходную функцию один раз по истечении "timeoutMs" мс после последнего вызова
        };
    }
}
