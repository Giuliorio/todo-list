class ProjectManager {
    #projects = [];

    constructor (projects = []) {
        this.#projects.push(...projects);
    }

    get projects () {
        return [...this.#projects]
    }

    add (projectToAdd) {
        this.#projects.push(projectToAdd);
        return projectToAdd;
    }

    remove (projectToRemove) {
        this.#projects = this.#projects.filter(project => project != projectToRemove);
        return projectToRemove;
    }

    reorder (projectToMove, newIndex) {
        const currentIndex = this.#projects.indexOf(projectToMove);
        if (currentIndex === -1 || newIndex < 0 || newIndex >= this.#projects.length) return;

        this.#projects.splice(currentIndex, 1);
        this.#projects.splice(newIndex, 0, projectToMove);

        return projectToMove;
    }

}

export default ProjectManager;