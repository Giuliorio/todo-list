import AppManager from "../models/AppManager";
import ContentController from "./contentController";
import SidebarController from "./SidebarController";

const DEFAULT_PROJECT_TITLE = 'New Project';

class Controller {
    #appManager = new AppManager;

    selectedProject;

    body = document.querySelector('body');
    
    addProject;

    lastClickTarget = null;
    timer = null;   

    constructor () {
        this.selectInitialProject()
        this.render();
        this.addEventListeners();
    }

    render () {
        new SidebarController(
            this.#appManager.projects, 
            DEFAULT_PROJECT_TITLE,
            (id) => this.isSelected(id),
            (event) => this.handleMenuItemSelect(event),
            (func) => this.handleProjectCreation(func),
            (projectList) => this.deleteProject(projectList),
        );
        this.createProject();
    }

    addEventListeners () {
        document.addEventListener('input', (event) => this.handleTextAreaResize(event));
    }

    handleTextAreaResize (event) {
        if (event.target.tagName.toLowerCase() === "textarea") {
            event.target.style.height = "auto"; // Reset height
            event.target.style.height = event.target.scrollHeight + "px"; // Set new height
        }
    }

    handleProjectCreation (createMenuItem) {
        this.updateTitle();
        document.querySelector('.sidebar .selected').classList.remove('selected');
        this.selectedProject = this.#appManager.addProject();
        this.createProject()
        return createMenuItem(this.selectedProject.title, this.selectedProject.id, 'selected', DEFAULT_PROJECT_TITLE);
    }

    handleMenuItemSelect (event) {
        const menuItem = event.target;
        const id = menuItem.dataset.id;

        if (menuItem.classList.contains('selected')) return;
        this.updateTitle()

        this.selectedProject = this.#appManager.projects.find(project => project.id === id);

        this.#switchProject(menuItem)      
    }

    #switchProject (menuItem) {
        document.querySelectorAll('.sidebar li').forEach(item => item.classList.remove('selected'));
        menuItem.classList.add('selected');
        
        this.createProject();
    }

    isSelected (id) {
        return id === this.selectedProject.id;
    }

    addTask (task) {
        return this.#appManager.addTask(this.selectedProject, task);
    }

    updateTitle () {
        document.querySelector(`.sidebar .selected`).textContent = this.selectedProject.title || DEFAULT_PROJECT_TITLE;
    }

    getTasks () {
        return this.#appManager.getTasks(this.selectedProject);
    }

    moveTask (taskId, locationToId) {
        const task = this.#appManager.getTask(taskId);
        const locationTo = this.#appManager.getProject(locationToId);
        this.#appManager.moveTask(task, this.selectedProject, locationTo);
    }

    deleteTask (taskId, locationId) {
        const task = this.#appManager.getTask(taskId);
        const location = this.#appManager.getProject(locationId);
        this.#appManager.removeTask(task, location);
    }

    getProjects () {
        return this.#appManager.projects.map(project => ({
            title: project.title || DEFAULT_PROJECT_TITLE,
            id: project.id
        }));
    }

    createProject () {
        new ContentController(
            this.selectedProject, 
            () => this.addTask(), 
            () => this.updateTitle(), 
            () => this.getTasks(),
            this.getProjects(),
            (taskId, locationToId) => this.moveTask(taskId, locationToId),
            (taskId, locationId) => this.deleteTask(taskId, locationId),
        );
    }

    deleteProject (projectList) {
        this.#appManager.removeProject(this.selectedProject);
        this.selectInitialProject();

        const menuItem = projectList.querySelector(`li[data-id='${this.selectedProject.id}']`);

        this.#switchProject(menuItem)
    }

    selectInitialProject () {
        this.selectedProject = this.#appManager.projects[0];
    }
}

export default Controller;