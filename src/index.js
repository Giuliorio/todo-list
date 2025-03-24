import createTask from './components/Task';
import Controller from './controller/Controller';
import { createElement } from './helpers/createElement';
import './reset.css';
import './styles.css';

const controller = new Controller();



function createMenuItem (title, selected) {
    const menuItem = createElement('li', {
        classNames: selected ? [selected] : [],
        textContent: title ? title : 'New Project',
    });

    return menuItem;
}


let tasks = content.querySelectorAll('.task');

let lastClickTarget = null;
let timer = null;

const button = document.querySelector('.new-task');
const projectList = document.querySelector('.sidebar .list');
const addProject = document.querySelector('.sidebar button');
const taskList = document.querySelector('.content .list');
const sidebarList = document.querySelector('.sidebar .list');

sidebarList.appendChild(createMenuItem('Inbox', 'selected'));

button.addEventListener('click', () => {
    taskList.appendChild(createTask());
    tasks = document.querySelectorAll('.task');
});

document.addEventListener("input", (event) => {
    if (event.target.tagName.toLowerCase() === "textarea") {
      event.target.style.height = "auto"; // Reset height
      event.target.style.height = event.target.scrollHeight + "px"; // Set new height
    }
  });

content.addEventListener('mousedown', (event) => {
    const targetTask = event.target.closest('.task');

    if (!targetTask) {
        tasks.forEach(task => {
            task.classList.remove('selected', 'opened');
        })
        return;
    }

    lastClickTarget = targetTask;
        timer = setTimeout(() => {
            lastClickTarget = null;
            timer = null;
        }, 500);

    if (targetTask.classList.contains('selected')) return;

    tasks.forEach(task => {
        task.classList.remove('selected', 'opened');
    })
    targetTask.classList.add('selected');
})

content.addEventListener('dblclick', () => {
    // const selectedTask = lastClickTarget ? lastClickTarget : document.querySelector('.selected.task');
    const selectedTask = lastClickTarget;
    if (selectedTask) {
        const title = selectedTask.querySelector('.title');

        selectedTask.classList.add('opened');
        title.removeAttribute('readonly');
        title.focus();

        lastClickTarget = null;
        clearTimeout(timer);
        timer = null;
    }
})

addProject.addEventListener('click', () => {
    projectList.appendChild(createMenuItem());
});