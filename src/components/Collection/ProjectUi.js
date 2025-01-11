import { createElement } from '../../helpers/domHelper';

const ProjectUi  = (projectLogic) => {
    const projectContainer = createElement('div', {
        classNames: ['project'],
    });

    return projectContainer;
}

export default ProjectUi;