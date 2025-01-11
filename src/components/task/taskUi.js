import { createElement } from '../../helpers/domHelper';

const taskUi  = (taskLogic) => {
    const taskContainer = createElement('div', {
        classNames: ['task'],
    });

    return taskContainer;
}

export default taskUi;