function createMoveDropdown(projects) {
    const dropdown = createElement('div', {
        classNames: ['move', 'dropdown'],
    })

   document.createElement("div");
    dropdown.classList.add("move-dropdown");

    projects.forEach(project => {
        dropdown.appendChild(createElement("button", {
            textContent: project.title,
            classNames: ['option'],
        }));
    });

    return dropdown;
}

export default createMoveDropdown;