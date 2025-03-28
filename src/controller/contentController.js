import createProject from "../components/Project";
import createTask from "../components/Task";

class ContentController {
    #content = document.querySelector('.content');
    
    #project;

    tasks;
    taskList;
    button;

    #addTask = () => {};

    constructor (project, addTask = () => {}) {
        this.#project = project;

        this.#addTask = addTask;

        this.render();
        this.addEventListeners();
    }

    render () {
        this.#content.replaceChildren();
        this.#content.appendChild(createProject());

        this.tasks = this.#content.querySelectorAll('.task');
        this.taskList = this.#content.querySelector('.list');
        this.button = this.#content.querySelector('.new-task');    
    }

    addEventListeners () {
        this.#content.addEventListener('click', (event) => this.handleClick(event));
        this.#content.addEventListener('dblclick', () => this.handleDoubleClick());
        this.button.addEventListener('click', () => this.handleTaskCreation());
        this.#content.querySelector('.title').addEventListener('input', (event) => this.#project.title = event.target.value);
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
        this.taskList.appendChild(createTask());
        this.tasks = document.querySelectorAll('.task');
        this.#addTask();
    }
 }

export default ContentController;