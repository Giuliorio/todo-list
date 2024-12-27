function Task(title, description, dueDate, priority) {
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;

    const getDescription = () => description;
    const setDescription = (newDescription) => description = newDescription;

    const getDueDate = () => dueDate;
    const setDueDate = (newDueDate) => dueDate = newDueDate;

    const getPriority = () => priority;
    const setPriority = (newPriority) => priority = newPriority;

    return { 
        getTitle, 
        setTitle, 
        getDescription, 
        setDescription ,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority
    };
}

export default Task