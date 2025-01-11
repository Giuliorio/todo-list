import { createElement } from "../helpers/domHelper";

function SidebarItem(projectTitle) {
    const sidebarItem = createElement('div', {
        classNames: ['item'],
        textContent: projectTitle
    });

    return sidebarItem;
}

export default SidebarItem;