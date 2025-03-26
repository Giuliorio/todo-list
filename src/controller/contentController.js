import createProject from "../components/Project";
import createTask from "../components/Task";

class ContentController {
    content = document.querySelector('.content');

    tasks;
    taskList;
    button;

    constructor () {

    }

    render (project) {
        this.content.replaceChildren();
        this.content.appendChild(createProject());

        this.tasks = document.querySelectorAll('.task');
        this.taskList = document.querySelector('.content .list');
        this.button = document.querySelector('.content .new-task');

        this.content.addEventListener('click', (event) => this.handleClick(event));
        this.content.addEventListener('dblclick', () => this.handleDoubleClick());
        this.button.addEventListener('click', () => this.handleTaskCreation());
    }

    handleClick (event) {
        const targetTask = event.target.closest('.task');

        if (!targetTask) {
            this.tasks.forEach(task => {
                task.classList.remove('selected', 'opened');
            })
            return;
        }
    
        this.lastClickTarget = targetTask;
        this.timer = setTimeout(() => {
            this.lastClickTarget = null;
            this.timer = null;
        }, 500);
    
        if (targetTask.classList.contains('selected')) return;
    
        this.tasks.forEach(task => {
            task.classList.remove('selected', 'opened');
        })
        targetTask.classList.add('selected');
    }

    handleDoubleClick () {
        const selectedTask = this.lastClickTarget;
        if (selectedTask) {
            const title = selectedTask.querySelector('.title');
    
            selectedTask.classList.add('opened');
            title.removeAttribute('readonly');
            title.focus();
    
            this.lastClickTarget = null;
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    handleTaskCreation () {
        this.taskList.appendChild(createTask());
        this.tasks = document.querySelectorAll('.task');
    }
}

export default ContentController;