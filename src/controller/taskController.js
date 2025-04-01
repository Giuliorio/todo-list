import createTask from "../components/Task";

class TaskController {
    #parentElement = document.querySelector('.content .list');

    #task;
    #title;
    #description;
    #checkbox;
    #taskData;

    constructor (taskData) {
        this.#taskData = taskData;

        this.#render();
        this.#addEventListeners();
    }

    #render () {
        this.#task = createTask(
            this.#taskData.title,
            this.#taskData.description, 
            this.#taskData.completion, 
            this.#taskData.id
        );
        this.#parentElement.appendChild(this.#task);

        this.#title = this.#task.querySelector('.title');
        this.#description = this.#task.querySelector('.description');
        this.#checkbox = this.#task.querySelector('input[type="checkbox"]');
    }

    #addEventListeners () {
        this.#title.addEventListener('input', (event) => this.#taskData.title = event.target.value);
        this.#description.addEventListener('input', (event) => this.#taskData.description = event.target.value);
        this.#checkbox.addEventListener('input', () => this.#taskData.toggleCompletion());
    }
}

export default TaskController;