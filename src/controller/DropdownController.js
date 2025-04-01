import createDropdown from "../components/Dropdown";

class DropdownController {
    #body = document.querySelector('body');
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
        this.#body.addEventListener('click', (event) => this.#closeDropdown(event));
    }

    toggleDropdown () {
        this.#body.appendChild(this.#dropdown); 

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