class Project {
    #id;
    #isCompleted = false;
    #title;
    #description;
    #taskIds = [];
    #dueDate;

    constructor(id = crypto.randomUUID(), title = '', description = '', dueDate = null, tasks = []) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#taskIds.push(...tasks);
        this.#dueDate = dueDate;
    }

    get id () {
        return this.#id;
    }

    get isCompleted () {
        return this.#isCompleted;
    }

    toggleCompleted () {
        this.#isCompleted = !this.#isCompleted;
    }

    get title () {
        return this.#title;
    }

    set title (value) {
        this.#title = value;
    }

    get description () {
        return this.#description;
    }

    set description (value) {
        this.#description = value;
    }

    get dueDate () {
        return this.#dueDate;
    }

    set dueDate (value) {
        this.#dueDate = value;
    }

    get taskIds () {
        return [...this.#taskIds]
    }

    add (taskToAdd) {
        this.#taskIds.push(taskToAdd.id);
        return taskToAdd;
    }

    remove (taskToRemove) {
        const index = this.#taskIds.findIndex(task => task.id === taskToRemove.id);
        return index === -1 ? this.#taskIds.splice(index, 1)[0] : null;
    }

}

export default Project