import { createElement } from "../helpers/createElement";

function createMenuItem (title, selected) {
    const menuItem = createElement('li', {
        classNames: selected ? [selected] : [],
        textContent: title ? title : 'New Project',
    });

    return menuItem;
}

export default createMenuItem;