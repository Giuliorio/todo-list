import { createElement } from "../helpers/createElement";

function createMenuItem (title, id, selected, titleDefault) {
    const menuItem = createElement('li', {
        classNames: selected ? [selected] : [],
        textContent: title || titleDefault,
        attributes: {
            'data-id': id,
        },
    });

    return menuItem;
}

export default createMenuItem;