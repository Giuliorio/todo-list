import createProject from "../components/Project";
import createSidebar from "../components/Sidebar";

class Controller {

    constructor () {
        this.render()
    }

    render () {
        const body = document.querySelector('body');
        const content = document.querySelector('.content');

        body.prepend(createSidebar());
        content.appendChild(createProject());
    }

}

export default Controller;