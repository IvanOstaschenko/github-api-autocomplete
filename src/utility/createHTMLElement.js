export default function createHTMLElement(tag = "div", ...className) {
    const element = document.createElement(tag);
    className && className.forEach((item) => element.classList.add(item));
    return element;
}
