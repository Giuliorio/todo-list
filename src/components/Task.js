import { createElement } from "../helpers/createElement";

function createTask () {
    const task = createElement('li', {classNames: ['task']});
    task.appendChild(createHeader());
    task.appendChild(createBody())
    
    return task;
}

function createHeader () {
    const header = createElement('div', {
        classNames: ['header'],
    });

    header.appendChild(createElement('input', {
        attributes: {
            type: 'checkbox',
        }
    }));

    header.appendChild(createElement('input', {
        classNames: ['title'],
        attributes: {
            type: 'text',
            placeholder: 'New To-Do',
            // value = '',
        }
    }));

    return header;
}

function createBody () {
    const body = createElement('div', {
        classNames: ['details'],
    });

    body.appendChild(createElement('textarea', {
        classNames: ['ghost'],
        attributes: {
            placeholder: 'Description',
        }
    }));

    return body;
}

export default createTask;
