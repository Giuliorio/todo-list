class TaskManager {
    #tasks = [];
    constructor (tasks = []) {
        this.#tasks.push(...tasks);
    }

    get tasks () {
        return [...this.#tasks];
    }

    getTask (id) {
        const index = this.#tasks.findIndex(task => task.id === id);
        return this.#tasks[index];
    }

    add (taskToAdd) {
        this.#tasks.push(taskToAdd);
        return taskToAdd;
    }

    remove (taskToRemove) {
        this.#tasks = this.#tasks.filter(task => task != taskToRemove);
        return taskToRemove;
    }

    reorder (taskToMove, newIndex) {
        const currentIndex = this.#tasks.indexOf(taskToMove);
        if (currentIndex === -1 || newIndex < 0 || newIndex >= this.#tasks.length) return;

        this.#tasks.splice(currentIndex, 1);
        this.#tasks.splice(newIndex, 0, taskToMove);

        return taskToMove;
    }
}

export default TaskManager;