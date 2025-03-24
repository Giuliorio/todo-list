export function createElement(tag, options = {}) {
    const { classNames = [], textContent = '', attributes = {} } = options;
    const element = document.createElement(tag);

    element.classList.add(...classNames);

    element.textContent = textContent;

    Object.keys(attributes).forEach(attribute => {
        element.setAttribute(attribute, attributes[attribute]);
    });

    return element;
};