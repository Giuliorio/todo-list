class Project {
    #id;
    #isCompleted = false;
    #title;
    #description;
    #items = [];
    #dueDate;

    constructor(id = crypto.randomUUID(), title = '', description = '', dueDate = null, items = []) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#items.push(...items);
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

    get items () {
        return this.#items.map(item => ({ ...item }));
    }

    addItem (value) {
        this.#items.push(value);
    }

    removeItem (taskId) {
        this.#items = this.#items.filter(item => task.id !== taskId);
    }

}