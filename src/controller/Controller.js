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
            this.sidebarList.appendChild(createMenuItem(project.title, isSelected ? 'selected' : ''));
        })

        this.addProject.addEventListener('click', () => this.handleProjectCreation());
        new ContentController(this.selectedProject, () => this.addTask());
    }

    handleTextAreaResize (event) {
        if (event.target.tagName.toLowerCase() === "textarea") {
            event.target.style.height = "auto"; // Reset height
            event.target.style.height = event.target.scrollHeight + "px"; // Set new height
        }
    }

    handleProjectCreation () {
        document.querySelectorAll('.sidebar li').forEach(menuItem => menuItem.classList.remove('selected'));
        this.selectedProject = this.#appManager.addProject();
        this.sidebarList.appendChild(createMenuItem(this.selectedProject.title, 'selected'));
        new ContentController(this.selectedProject, () => this.addTask());
    }

    addTask () {
        this.#appManager.addTask(this.selectedProject);
        console.log(this.#appManager.tasks);
        console.log(this.selectedProject)
    }
}

export default Controller;