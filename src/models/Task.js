class Task {
    #id;
    #completion = false;
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(id = crypto.randomUUID(), title = '', description = '', dueDate = null, priority = '') {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get id () {
        return this.#id;
    }

    get completion () {
        return this.#completion;
    }

    toggleCompletion () {
        this.#completion = !this.#completion;
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

    get priority () {
        return this.#priority;
    }

    set priority (value) {
        this.#priority = value;
    }

}

export default Task