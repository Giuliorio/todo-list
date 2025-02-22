class ProjectManager {
    #projects = [];

    constructor (projects = []) {
        this.#projects.push(...projects);
    }

    get projects () {
        return [...this.#projects]
    }

    addProject (projectToAdd) {
        this.#projects.push(projectToAdd);
    }

    removeProject (projectToRemove) {
        this.#projects = this.#projects.filter(project => project != projectToRemove);
    }

    swapProjects (id1, id2) {
        let projects = this.#projects;
        let index1 = -1, index2 = -1;

        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === id1) index1 = i;
            if (projects[i].id === id2) index2 = i;
            if(index1 !== -1 && index2 !== -1) break;
        }

        if (index1 === -1 && index2 === -1) {
            console.error("One or both IDs not found!");
            return;
        }

        [projects[index1], projects[index2]] = [projects[index2], projects[index1]];
    }

    moveItem (itemId, fromProject, toProject) {
        fromProject.removeItem(itemId);
        toProject.addItem(itemId);
    }
}

export default ProjectManager;