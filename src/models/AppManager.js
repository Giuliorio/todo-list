import Project from "./Project";
import ProjectManager from "./ProjectManager";
import Task from "./Task";
import TaskManager from "./TaskManager";

class AppManager {
    #projectManager = new ProjectManager;
    #taskManager = new TaskManager;

    constructor () {
        const index = this.addProject();
        index.title = 'Index';
        this.addTask(index, new Task('First Task'));
        this.addTask(index, new Task('Second Task', 'I have a description!'));
    }

    get projects () {
        const projects = this.#projectManager.projects;

        return projects;
    }

    getProject (id) {
        console.log(id)
        const project = this.#projectManager.getProject(id);

        return project;
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

    get tasks () {
        const tasks = this.#taskManager.tasks;

        return tasks;
    }

    getTasks (project) {
        const tasks = project.taskIds.map(taskId => this.getTask(taskId));

        return tasks;
    }

    addTask (location, task = new Task()) {
        this.#taskManager.add(task);
        location.add(task);

        return task;
    }

    removeTask (task, location) {
        location.remove(task);
        this.#taskManager.remove(task);

        return task;
    }

    moveTask (task, locationFrom, locationTo) {
        this.removeTask(task, locationFrom);
        this.addTask(task, locationTo);

        return task;
    }

    editTask (task, settings) {
        Object.entries(settings).forEach(([key, value]) => {
            if (task.hasOwnProperty(key)) {
                task[key] = value;
            }
        });

        return task;
    }

    toggleCompletion(completable) {
        completable.toggleCompletion();

        return completable;
    }

}

export default AppManager;