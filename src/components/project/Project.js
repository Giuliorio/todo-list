import { propertyHandler } from "../../helpers/moduleHelper";

const Project = (initialTitle, options = {}) => {
    const { tasks = [] } = options;
    let { initialDescription = '' } = options;

    const [ getTitle, setTitle ] = propertyHandler(initialTitle);
    const [ getDescription, setDescription] = propertyHandler(initialDescription)

    const getTasks = () => tasks.map(task => task);
    const addTask = (task) => tasks.push(task);

    return {
        getTitle, setTitle,
        getDescription, setDescription,
        getTasks, addTask
    };
}

export default Project;