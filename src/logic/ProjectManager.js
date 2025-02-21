class ProjectManager {
    #projects = [];

    constructor (projects) {
        this.#projects.push(...projects);
    }

    get projects () {
        return [...this.#projects]
    }

    addProject (projectToAdd) {
        this.#projects.push(projectToAdd);
    }

    removeProject (projectToRemove) {
        this.#projects.filter(project => project != projectToRemove);
    }

    moveItem (itemId, fromProject, toProject) {
        fromProject.removeItem(itemId);
        toProject.addItem(itemId);
    }
}

export default ProjectManager;