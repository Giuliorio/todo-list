function Collection(name) {
    const tasks = [];

    const getName = () => name;
    const setName = (newName) => name = newName;

    const getTasks = () => tasks.map(task => task);
    const addTask = (task) => tasks.push(task);

    return {
        getName,
        setName,
        getTasks,
        addTask
    }
}

export default Collection