import ProjectManager from "./ProjectManager";
import TaskManager from "./TaskManager";

class AppManager {
    #projectManager = new ProjectManager;
    #taskManager = new TaskManager;

    constructor () {

    }

    get projects () {
        return this.#projectManager.projects;
    }

    addProject (project) {
        return this.#projectManager.add(project);
    }

    removeProject (project) {
        return this.#projectManager.remove(project);
    }

    getTask (id) {
        return this.#taskManager.getTask(id);
    }

    getTasks (project) {
        return project.taskIds.map(taskId => this.getTask(taskId));
    }

    addTask (task, location) {
        this.#taskManager.add(task);
        return location.add(task);
    }

    removeTask (task, location) {
        location.remove(task);
        return task;
    }
}

export default AppManager;