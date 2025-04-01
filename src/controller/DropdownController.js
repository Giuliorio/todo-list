import createDropdown from "../components/Dropdown";

class DropdownController {
    #content = document.querySelector('.content');
    #dropdown = null;

    #button;

    #projects;

    constructor (projects, button) {
        this.#projects = projects;
        this.#dropdown = createDropdown(this.#projects);
        this.#button = button;

        this.addEventListeners();
    }

    addEventListeners () {
        this.#content.addEventListener('click', (event) => this.#closeDropdown(event));
    }

    toggleDropdown () {
        this.#content.appendChild(this.#dropdown); 

        const rect = this.#button.getBoundingClientRect();
        this.#dropdown.style.bottom = `${window.innerHeight - rect.top}px`;
        this.#dropdown.style.left = `${rect.left + window.scrollX}px`;
        this.#dropdown.classList.add('show');
    }

    #closeDropdown (event) {
        if (!this.#dropdown.contains(event.target) && event.target !== this.#button) {
            this.#dropdown.classList.remove("show");
        }
    }

}

export default DropdownController;