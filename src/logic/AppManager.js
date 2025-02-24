import Project from "./Project";
import ProjectManager from "./ProjectManager";
import TaskManager from "./TaskManager";

class AppManager {
    #projectManager = new ProjectManager;
    #taskManager = new TaskManager;

    constructor () {

    }

    get projects () {
        const projects = this.#projectManager.projects;

        return projects;
    }

    addProject (project = new Project()) {
        this.#projectManager.add(project);

        return project;
    }

    removeProject (project) {
        this.#projectManager.remove(project);

        return project;
    }

    getTask (id) {
        const task = this.#taskManager.getTask(id);

        return task;
    }

    getTasks (project) {
        project.taskIds.map(taskId => this.getTask(taskId));

        return project;
    }

    addTask (task, location) {
        this.#taskManager.add(task);
        location.add(task);

        return task;
    }

    removeTask (task, location) {
        location.remove(task);
        this.#taskManager.remove(task);

        return task;
    }
}

export default AppManager;