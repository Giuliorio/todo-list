import { createElement } from "../helpers/domHelper";

function SidebarItem(projectTitle, onClick) {
    const sidebarItem = createElement('div', {
        classNames: ['item'],
        textContent: projectTitle
    });

    sidebarItem.addEventListener('click', () => onClick(sidebarItem, projectTitle));

    return sidebarItem;
}

export default SidebarItem;