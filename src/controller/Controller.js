import createMenuItem from "../components/MenuItem";
import createProject from "../components/Project";
import createSidebar from "../components/Sidebar";
import createTask from "../components/Task";
import AppManager from "../models/AppManager";

class Controller {
    #appManager = new AppManager;

    selectedProject;

    body = document.querySelector('body');
    content = document.querySelector('.content');
    tasks;
    button;
    addProject;
    taskList;
    sidebarList;

    lastClickTarget = null;
    timer = null;   

    constructor () {
        this.selectedProject = this.#appManager.projects[0];
        this.render();
    }

    render () {
        this.body.prepend(createSidebar());
        this.sidebarList = document.querySelector('.sidebar .list');

        this.content.appendChild(createProject());

        this.#appManager.projects.forEach(project => {
            const isSelected = project.id === this.selectedProject.id;
            this.sidebarList.appendChild(createMenuItem(project.title, isSelected ? 'selected' : ''));
        })

        this.tasks = this.content.querySelectorAll('.task');
        this.button = document.querySelector('.new-task');
        this.addProject = document.querySelector('.sidebar button');
        this.taskList = document.querySelector('.content .list');

        document.addEventListener('input', (event) => this.handleTextAreaResize(event));
        this.content.addEventListener('click', (event) => this.handleClick(event));
        this.content.addEventListener('dblclick', () => this.handleDoubleClick());
        this.button.addEventListener('click', () => this.handleTaskCreation());
        this.addProject.addEventListener('click', () => this.handleProjectCreation());
    }

    handleClick (event) {
        const targetTask = event.target.closest('.task');

        if (!targetTask) {
            this.tasks.forEach(task => {
                task.classList.remove('selected', 'opened');
            })
            return;
        }
    
        this.lastClickTarget = targetTask;
        this.timer = setTimeout(() => {
            this.lastClickTarget = null;
            this.timer = null;
        }, 500);
    
        if (targetTask.classList.contains('selected')) return;
    
        this.tasks.forEach(task => {
            task.classList.remove('selected', 'opened');
        })
        targetTask.classList.add('selected');
    }

    handleDoubleClick () {
        const selectedTask = this.lastClickTarget;
        if (selectedTask) {
            const title = selectedTask.querySelector('.title');
    
            selectedTask.classList.add('opened');
            title.removeAttribute('readonly');
            title.focus();
    
            this.lastClickTarget = null;
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    handleTaskCreation () {
        this.taskList.appendChild(createTask());
        this.tasks = document.querySelectorAll('.task');
    }

    handleProjectCreation () {
        this.sidebarList.appendChild(createMenuItem())
    }

    handleTextAreaResize (event) {
        if (event.target.tagName.toLowerCase() === "textarea") {
            event.target.style.height = "auto"; // Reset height
            event.target.style.height = event.target.scrollHeight + "px"; // Set new height
        }
    }
}

export default Controller;