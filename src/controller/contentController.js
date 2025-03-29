import createProject from "../components/Project";
import createTask from "../components/Task";
import TaskController from "./taskController";

class ContentController {
    #content = document.querySelector('.content');
    
    #project;
    #title;

    tasks;
    taskList;
    button;

    #addTask = () => {};
    #updateTitle = () => {};
    #getTasks = () => {};

    constructor (project, addTask = () => {}, updateTitle = () => {}, getTasks = () => {}) {
        this.#project = project;

        this.#addTask = addTask;
        this.#updateTitle = updateTitle;
        this.#getTasks = getTasks;

        this.render();
        this.addEventListeners();
    }

    render () {
        this.#content.replaceChildren();
        this.#content.appendChild(createProject(this.#project.title || '', this.#project.description || ''));
        this.#getTasks().forEach(task => this.loadTask(task));

        this.tasks = this.#content.querySelectorAll('.task');
        this.taskList = this.#content.querySelector('.list');
        this.button = this.#content.querySelector('.new-task');    
    }

    addEventListeners () {
        this.#content.addEventListener('click', (event) => this.handleClick(event));
        this.#content.addEventListener('dblclick', () => this.handleDoubleClick());
        this.button.addEventListener('click', () => this.handleTaskCreation());
        this.#title = this.#content.querySelector('.title')
        this.#title.addEventListener('input', (event) => this.#project.title = event.target.value);
        this.#title.addEventListener('blur', () => this.#updateTitle());
        this.#content.querySelector('.description').addEventListener('input', (event) => this.#project.description = event.target.value);
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
        const newTask = this.#addTask();
        this.loadTask(newTask);
    }

    loadTask (task) {
        new TaskController(task);
        this.tasks = document.querySelectorAll('.task');
    }

 }

export default ContentController;