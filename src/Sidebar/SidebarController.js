import SidebarItem from "./SidebarItem";

const SidebarController = (projects, activeProject) => {
    const sidebar = document.querySelector('#sidebar');

    function renderSidebar() {
        sidebar.innerHTML = '';

       projects.forEach(project => {
            const sidebarItem = SidebarItem(project.getTitle(), handleProjectSelect);
            sidebar.appendChild(sidebarItem);
        });
    }

    function selectFirstProject() {
        const firstSidebarItem = document.querySelector('#sidebar .item');
        firstSidebarItem?.classList.add('selected');

        activeProject = projects[0];
    }

    function handleProjectSelect(sidebarItem, projectTitle) {
        // Update Sidebar's active item
        const sidebarItems = document.querySelectorAll('#sidebar .item');
        sidebarItems.forEach(item => {
            item.classList.remove('selected');
        })
        sidebarItem.classList.add('selected');

        // Render Main
        const selectedProject = projects.find(project => project.getTitle() === projectTitle);
        if (selectedProject) {
            activeProject = selectedProject;
            // renderMain();
        }
    }

    return { renderSidebar, selectFirstProject };
};

export default SidebarController;