import createMoveDropdown from "../components/Dropdown";
import createProject from "../components/Project";
import createTask from "../components/Task";
import { createElement } from "../helpers/createElement";
import DropdownController from "./DropdownController";
import TaskController from "./taskController";

class ContentController {
    #content = document.querySelector('.content');
    
    #project;
    #title;

    tasks = [];
    #newTaskButton;
    #moveTaskButton;
    #deleteTaskButton;
    #moveDropdown;

    #addTask = () => {};
    #updateTitle = () => {};
    #getTasks = () => {};
    #moveTask = () => {};
    #deleteTask = () => {};

    #projects;

    constructor (
        project, 
        addTask = () => {}, 
        updateTitle = () => {}, 
        getTasks = () => {}, 
        projects, 
        moveTask = () => {},
        deleteTask = () => {}
    ) {
        this.#project = project;

        this.#addTask = addTask;
        this.#updateTitle = updateTitle;
        this.#getTasks = getTasks;
        this.#projects = projects;
        this.#moveTask = moveTask;
        this.#deleteTask = deleteTask;

        this.render();
        this.addEventListeners();
    }

    render () {
        const newContent = this.#content.cloneNode(false)
        this.#content.replaceWith(newContent);
        this.#content = newContent;

        this.#content.appendChild(createProject(this.#project.title || '', this.#project.description || ''));
        this.#getTasks().forEach(task => this.loadTask(task));
        
        this.#newTaskButton = this.#content.querySelector('.new-task');  
        this.#moveTaskButton = this.#content.querySelector('.move');
        this.#deleteTaskButton = this.#content.querySelector('.delete');

        this.#moveDropdown = new DropdownController(
            this.#projects,
            this.#moveTaskButton, 
            (taskId, locationToId) => this.moveTaskWrapper(taskId, locationToId));
    }

    addEventListeners () {
        this.#content.addEventListener('click', (event) => this.handleClick(event));
        this.#content.addEventListener('dblclick', () => this.handleDoubleClick());
        this.#newTaskButton.addEventListener('click', () => this.handleTaskCreation());
        this.#moveTaskButton.addEventListener('click', () => this.#moveDropdown.toggleDropdown());
        this.#deleteTaskButton.addEventListener('click', () => this.handleTaskDeletion());
        this.#title = this.#content.querySelector('.title')
        this.#title.addEventListener('input', (event) => this.#project.title = event.target.value);
        this.#title.addEventListener('blur', () => this.#updateTitle());
        this.#content.querySelector('.description').addEventListener('input', (event) => this.#project.description = event.target.value);
    }

    handleClick (event) {
        const targetTask = event.target.closest('.task');

        if (event.target.closest('.footer')) return;

        if (!targetTask) {
            this.tasks.forEach(task => {
                task.classList.remove('selected', 'opened');
            })
            this.#moveTaskButton.disabled = true;
            this.#deleteTaskButton.disabled = true;
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

        this.#moveTaskButton.disabled = false;
        this.#deleteTaskButton.disabled = false;
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

    handleTaskDeletion () {
        const task = this.#content.querySelector('.selected');
        this.#deleteTask(task.getAttribute('data-id'), this.#project.id);

        task.remove();
        this.tasks = this.#content.querySelectorAll('.task');
    }

    moveTaskWrapper (task, locationToId) {
        this.#moveTask(task.getAttribute('data-id'), locationToId);

        task.remove();
        this.tasks = this.#content.querySelectorAll('.task'); 
    }

 }

export default ContentController;