import SidebarItem from "./SidebarItemUi";

const SidebarController = (projects, activeProject) => {
    const sidebar = document.querySelector('#sidebar');

    function renderSidebar() {
        sidebar.innerHTML = '';

       projects.forEach(project => {
            const sidebarItem = SidebarItem(project.getTitle());
            sidebarItem.addEventListener('click', () => handleProjectSelect(sidebarItem, project));
            sidebar.appendChild(sidebarItem);
        });
    }

    function selectFirstProject() {
        const firstSidebarItem = document.querySelector('#sidebar .item');
        firstSidebarItem?.classList.add('selected');

        activeProject = projects[0];
    }

    function handleProjectSelect(sidebarItem, project) {
        const sidebarItems = document.querySelectorAll('#sidebar .item');
        sidebarItems.forEach(item => {
            item.classList.remove('selected');
        })
        sidebarItem.classList.add('selected');

        activeProject = project;
        // renderMain();
    }
    

    return { renderSidebar, selectFirstProject };
};

export default SidebarController;