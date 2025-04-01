import { createElement } from "../helpers/createElement";

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

    footer.appendChild(createElement('button', {
        classNames: ['delete'],
        textContent: '-',
        attributes: {
            disabled: true,
        },
    }));

    return footer;
}

export default createSidebar;