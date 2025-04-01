import { createElement } from "../helpers/createElement";

function createProject (title, description) {
    const project = createElement('div', {
        classNames: ['project']
    });

    project.appendChild(createHeader(title, description));
    project.appendChild(createBody());
    project.appendChild(createFooter());

    return project;
}

function createHeader (title, description) {
    const header = createElement('div', {
        classNames: ['header']
    });

    header.appendChild(createElement('input', {
        classNames: ['title'],
        attributes: {
            type: 'text',
            placeholder: 'New Project',
            value: title,
        },
    }));

    header.appendChild(createElement('textarea', {
        textContent: description,
        classNames: ['ghost', 'description'],
        attributes: {
            placeholder: 'Description',
        },
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
        classNames: ['move'],
        attributes: {
            disabled: true,
        }
    }));

    footer.appendChild(createElement('button', {
        textContent: 'Delete',
        classNames: ['delete'],
        attributes: {
            disabled: true,
        }
    }));

    return footer;
}

export default createProject;