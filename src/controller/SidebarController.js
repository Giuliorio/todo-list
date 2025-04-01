import createMenuItem from "../components/MenuItem";
import createSidebar from "../components/Sidebar";

class SidebarController {
    #body = document.querySelector('body');
    #sidebar;
    #projects;
    #DEFAULT_PROJECT_TITLE;

    #sidebarList;
    #addProjectBtn;
    #deleteProjectBtn;

    #isSelected = () => {};
    #handleMenuItemSelect = () => {};
    #handleProjectCreation = () => {};
    #deleteProject = () => {};

    constructor (projects, DEFAULT_PROJECT_TITLE, isSelected, handleMenuItemSelect, handleProjectCreation, deleteProject) {
        this.#projects = projects;
        this.#DEFAULT_PROJECT_TITLE = DEFAULT_PROJECT_TITLE;
        this.#isSelected = isSelected;
        this.#handleProjectCreation = handleProjectCreation;
        this.#handleMenuItemSelect = handleMenuItemSelect;
        this.#deleteProject = deleteProject;

        this.render();
        this.addEventListeners();
    }

    render () {
        this.#body.prepend(createSidebar());
        this.#sidebar = this.#body.querySelector('.sidebar');

        this.#sidebarList = this.#sidebar.querySelector('.list');
        this.#addProjectBtn = this.#sidebar.querySelector('.new-project');
        this.#deleteProjectBtn = this.#sidebar.querySelector('.delete');

        this.#projects.forEach(project => {
            const menuItem = createMenuItem(project.title, project.id, this.#isSelected(project.id) ? 'selected' : '', this.#DEFAULT_PROJECT_TITLE);
            menuItem.addEventListener('click',  (event) => this.#handleMenuItemSelect(event));
            this.#sidebarList.appendChild(menuItem);
        });
    }

    addEventListeners () {
        this.#addProjectBtn.addEventListener('click', () => {
            const newMenuItem = this.#handleProjectCreation((...args) => createMenuItem(...args))
            this.#sidebarList.appendChild(newMenuItem);
            newMenuItem.addEventListener('click',  (event) => this.#handleMenuItemSelect(event));
        });

        this.#deleteProjectBtn.addEventListener('click', () => this.handleProjectDeletion())
    }

    handleProjectDeletion () {
        this.#sidebar.querySelector('.selected').remove();

        this.#deleteProject(this.#sidebarList);
    }

}

export default SidebarController;