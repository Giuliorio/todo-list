import { createElement } from "../helpers/createElement";

function createProject () {
    const project = createElement('div', {
        classNames: ['project']
    });

    project.appendChild(createHeader());
    project.appendChild(createBody());
    project.appendChild(createFooter());

    return project;
}

function createHeader () {
    const header = createElement('div', {
        classNames: ['header']
    });

    header.appendChild(createElement('input', {
        classNames: ['title'],
        attributes: {
            type: 'text',
            placeholder: 'New Project',
        }
    }));

    header.appendChild(createElement('textarea', {
        classNames: ['ghost'],
        attributes: {
            placeholder: 'Description',
        }
    }));

    return header;
}

function createBody () {
    const body = createElement('ul', {
        classNames: ['list'],
    });

    return body;
}

function createFooter () {
    const footer = createElement('div', {
        classNames: ['footer']
    })

    footer.appendChild(createElement('button', {
        classNames: ['new-task'],
        textContent: '+',
    }));

    footer.appendChild(createElement('button', {
        textContent: 'Move',
    }));

    return footer;
}

export default createProject;