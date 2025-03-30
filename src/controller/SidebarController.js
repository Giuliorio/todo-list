import createMenuItem from "../components/MenuItem";
import createSidebar from "../components/Sidebar";

class SidebarController {
    #body = document.querySelector('body');
    #sidebar;
    #projects;
    #DEFAULT_PROJECT_TITLE;

    #sidebarList;
    #addProjectBtn;

    #isSelected = () => {};
    #handleMenuItemSelect = () => {};
    #handleProjectCreation = () => {};

    constructor (projects, DEFAULT_PROJECT_TITLE, isSelected, handleMenuItemSelect, handleProjectCreation) {
        this.#projects = projects;
        this.#DEFAULT_PROJECT_TITLE = DEFAULT_PROJECT_TITLE;
        this.#isSelected = isSelected;
        this.#handleProjectCreation = handleProjectCreation;
        this.#handleMenuItemSelect = handleMenuItemSelect;

        this.render();
        this.addEventListeners();
    }

    render () {
        this.#body.prepend(createSidebar());
        this.#sidebar = this.#body.querySelector('.sidebar');

        this.#sidebarList = this.#sidebar.querySelector('.list');
        this.#addProjectBtn = this.#sidebar.querySelector('.new-project');

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
    }

}

export default SidebarController;