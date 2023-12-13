
export const createElementHelper = (type, innerText = "", classList = []) => {
    const elem = document.createElement(type);
    elem.innerText = innerText;
    classList.forEach(cls => elem.classList.add(cls));

    return elem;
}