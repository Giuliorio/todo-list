import { createElement } from "../helpers/createElement";

function createDropdown(options) {
    const dropdown = createElement('div', {
        classNames: ['dropdown'],
    });

    options.forEach(option => {
        dropdown.appendChild(createElement("button", {
            textContent: option.title,
            classNames: ['option'],
            attributes: {
                'data-id': option.id,
            }
        }));
    });

    return dropdown;
}

export default createDropdown;