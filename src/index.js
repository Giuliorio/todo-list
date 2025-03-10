import './reset.css';
import './styles.css';

document.addEventListener("input", (event) => {
    if (event.target.tagName.toLowerCase() === "textarea") {
      event.target.style.height = "auto"; // Reset height
      event.target.style.height = event.target.scrollHeight + "px"; // Set new height
    }
  });

// const tasks = document.querySelectorAll('.task');

// tasks.forEach(task => {
//     task.addEventListener('click', () => {  
//         if (task.classList.contains('selected')) return;

//         clearTaskStates();
//         selectTask(task);
//     });

//     task.addEventListener('dblclick', () => {
//         openTask(task);
//     })

//     function clearTaskStates() {
//         document.querySelectorAll('.task').forEach(task => {
//             task.classList.remove('selected', 'opened');
//         });
//     }
    
//     function selectTask(task) {
//         task.classList.add('selected');
//     }
    
//     function openTask(task) {
//         const title = task.querySelector('.title');
    
//         task.classList.add('opened');
    
//         title.removeAttribute('readonly');
//         title.focus()
//     }
// })


const content = document.querySelector('.content');
const tasks = content.querySelectorAll('.task');

let lastClickTarget = null;
let timer = null;

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
