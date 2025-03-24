import createProject from "../components/Project";
import createSidebar from "../components/Sidebar";

class Controller {
    body = document.querySelector('body');
    content = document.querySelector('.content');

    constructor () {
        this.render()
    }

    render () {
        this.body.prepend(createSidebar());
        this.content.appendChild(createProject());
    }

}

export default Controller;