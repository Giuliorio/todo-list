class Task {
    #id;
    #settings;
    #isDone;
    static #allowedSettings = ['title', 'description', 'dueDate', 'priority'];

    constructor(settings = {}, id = crypto.randomUUID()) {
        this.#settings = settings;
        this.#id = id;
        this.#isDone = false;

        this.update(settings)
    }

    get isDone () {
        return this.#isDone;
    }

    toggleDone () {
        this.#isDone = !this.#isDone;
    }

    get id () {
        return this.#id;
    }

    update (updates) {
        const filteredUpdates = Object.fromEntries(
            Object.entries(updates).filter(([update]) => allowedSettings.includes(update))
        );

        Object.assign(this, filteredUpdates);
    }

}