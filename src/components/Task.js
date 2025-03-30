import { createElement } from "../helpers/createElement";

function createTask (title, description, completion) {
    const task = createElement('li', {classNames: ['task']});
    task.appendChild(createHeader(title, completion));
    task.appendChild(createBody(description))
    
    return task;
}

function createHeader (title, completion) {
    const header = createElement('div', {
        classNames: ['header'],
    });

    header.appendChild(createElement('input', {
        attributes: {
            type: 'checkbox',
            ...(completion && {checked: 'checked'}),
        }
    }));

    header.appendChild(createElement('input', {
        classNames: ['title'],
        attributes: {
            type: 'text',
            placeholder: 'New To-Do',
            value: title,
        }
    }));

    return header;
}

function createBody (description) {
    const body = createElement('div', {
        classNames: ['details'],
    });

    body.appendChild(createElement('textarea', {
        textContent: description,
        classNames: ['ghost', 'description'],
        attributes: {
            placeholder: 'Description',
        }
    }));

    return body;
}

export default createTask;
