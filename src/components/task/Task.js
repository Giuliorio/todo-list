import { propertyHandler } from "../../helpers/moduleHelper";

function Task(initialTitle, options = {}) {
    let { initialDescription = '' } = options;

    const [ getTitle, setTitle ] = propertyHandler(initialTitle);
    const [ getDescription, setDescription] = propertyHandler(initialDescription)

    return { 
        getTitle, setTitle, 
        getDescription, setDescription
    };
}

export default Task;