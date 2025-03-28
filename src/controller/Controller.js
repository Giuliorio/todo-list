import createMenuItem from "../components/MenuItem";
import createSidebar from "../components/Sidebar";
import AppManager from "../models/AppManager";
import ContentController from "./contentController";

class Controller {
    #appManager = new AppManager;

    selectedProject;

    body = document.querySelector('body');
    
    addProject;
    sidebarList;

    lastClickTarget = null;
    timer = null;   

    constructor () {
        this.selectedProject = this.#appManager.projects[0];
        this.render();
    }

    render () {
        document.addEventListener('input', (event) => this.handleTextAreaResize(event));

        this.body.prepend(createSidebar());
        this.sidebarList = document.querySelector('.sidebar .list');
        this.addProject = document.querySelector('.sidebar .new-project');

        this.#appManager.projects.forEach(project => {
            const isSelected = project.id === this.selectedProject.id;
            const menuItem = createMenuItem(project.title, project.id, isSelected ? 'selected' : '');
            menuItem.addEventListener('click',  (event) => this.handleMenuItemSelect(event));
            this.sidebarList.appendChild(menuItem);
        })

        this.addProject.addEventListener('click', () => this.handleProjectCreation());
        new ContentController(this.selectedProject, () => this.addTask(), () => this.updateTitle());
    }

    handleTextAreaResize (event) {
        if (event.target.tagName.toLowerCase() === "textarea") {
            event.target.style.height = "auto"; // Reset height
            event.target.style.height = event.target.scrollHeight + "px"; // Set new height
        }
    }

    handleProjectCreation () {
        this.updateTitle();
        document.querySelectorAll('.sidebar li').forEach(menuItem => menuItem.classList.remove('selected'));
        this.selectedProject = this.#appManager.addProject();
        const newMenuItem = this.sidebarList.appendChild(createMenuItem(this.selectedProject.title, this.selectedProject.id, 'selected'));
        new ContentController(this.selectedProject, () => this.addTask());
        newMenuItem.addEventListener('click',  (event) => this.handleMenuItemSelect(event));
    }

    handleMenuItemSelect (event) {
        const menuItem = event.target;
        const id = menuItem.dataset.id;

        if (menuItem.classList.contains('selected')) return;
        this.updateTitle()

        document.querySelectorAll('.sidebar li').forEach(item => item.classList.remove('selected'));
        menuItem.classList.add('selected');
        this.selectedProject = this.#appManager.projects.find(project => project.id === id);
        new ContentController(this.selectedProject, () => this.addTask(), () => this.updateTitle());
    }

    addTask () {
        this.#appManager.addTask(this.selectedProject);
        console.log(this.#appManager.tasks);
        console.log(this.selectedProject)
    }

    updateTitle () {
        document.querySelector(`.sidebar .selected`).textContent = this.selectedProject.title;
    }
}

export default Controller;