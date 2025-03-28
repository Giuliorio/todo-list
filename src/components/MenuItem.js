import { createElement } from "../helpers/createElement";

function createMenuItem (title, id, selected) {
    const menuItem = createElement('li', {
        classNames: selected ? [selected] : [],
        textContent: title ? title : 'New Project',
        attributes: {
            'data-id': id,
        },
    });

    return menuItem;
}

export default createMenuItem;