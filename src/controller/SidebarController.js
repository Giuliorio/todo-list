import createMenuItem from "../components/MenuItem";
import createSidebar from "../components/Sidebar";

class SidebarController {
    #body = document.querySelector('body');
    #sidebar;
    #DEFAULT_PROJECT_TITLE;
    
    #sidebarList;
    #addProjectBtn;
    #deleteProjectBtn;
    
    #getProjects = () => {};
    #isSelected = () => {};
    #handleMenuItemSelect = () => {};
    #handleProjectCreation = () => {};
    #deleteProject = () => {};

    constructor (getProjects, DEFAULT_PROJECT_TITLE, isSelected, handleMenuItemSelect, handleProjectCreation, deleteProject) {
        this.#getProjects = getProjects;
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

        this.#getProjects().forEach(project => {
            const menuItem = createMenuItem(project.title, project.id, this.#isSelected(project.id) ? 'selected' : '', this.#DEFAULT_PROJECT_TITLE);
            menuItem.addEventListener('click',  (event) => this.#handleMenuItemSelect(event));
            this.#sidebarList.appendChild(menuItem);
        });

        this.#updateDeleteButtonState();
    }

    addEventListeners () {
        this.#addProjectBtn.addEventListener('click', () => {
            const newMenuItem = this.#handleProjectCreation((...args) => createMenuItem(...args))
            this.#sidebarList.appendChild(newMenuItem);
            newMenuItem.addEventListener('click',  (event) => this.#handleMenuItemSelect(event));
            this.#updateDeleteButtonState();
        });

        this.#deleteProjectBtn.addEventListener('click', () => this.#handleProjectDeletion())
    }

    #handleProjectDeletion () {
        this.#sidebar.querySelector('.selected').remove();

        this.#deleteProject(this.#sidebarList);
        this.#updateDeleteButtonState();
    }

    #updateDeleteButtonState () {
        this.#deleteProjectBtn.disabled = this.#getProjects().length <= 1;
    }

}

export default SidebarController;