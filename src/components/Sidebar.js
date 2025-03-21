import { createElement } from "../helpers/createHelement";

function createSidebar () {
    const sidebar = createElement('div', {
        classNames: ['sidebar'],
    });

    sidebar.appendChild(createElement('ul', {
        classNames: ['list'],
    }));

    sidebar.appendChild(createFooter());

    return sidebar;
}

function createFooter () {
    const footer = createElement('div', {
        classNames: ['footer']
    })

    footer.appendChild(createElement('button', {
        classNames: ['new-project'],
        textContent: '+',
    }));

    return footer;
}

export default createSidebar;