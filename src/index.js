import './reset.css';
import './styles.css';

import Task from './components/Task';
import Collection from './components/Collection';

const sidebarItem = document.querySelectorAll('.sidebar .item')
const inboxContainer = document.querySelector('.inbox');

sidebarItem.forEach(item => {
    item.addEventListener('click', () => {
        sidebarItem.forEach(el => {
            el.classList.remove('selected');
        });
        item.classList.add('selected');
    });
});
