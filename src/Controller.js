import Project from "./components/project/Project";
import Task from "./components/task/Task";
import SidebarController from "./Sidebar/SidebarController";

const Controller = (() => {
    const projects = [
        Project('Inbox'),
        Project(
            'Make a todo-list app',
            'This app will be an important project to me as it was one I have been wanting to do for a long time',
            [
                Task(
                    'Create the Project Interface',
                    'The project interface requires a lot of stuff'
                ),
                Task(
                    'Create the Task interface',
                    'The task interface also requires a lot of stuff'
                )
            ]
        )
    ];
    
    let activeProject = null;

    const sidebar = SidebarController(projects, activeProject);

    function init() {
        sidebar.renderSidebar();
        sidebar.selectFirstProject();
    }

    return { init };
})();

export default Controller;