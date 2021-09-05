import './styles/main.css';

import TagsList from "./components/TagsList";

const tagsList = new TagsList(document.querySelector('.tagsList'));

const input = document.querySelector('.input');
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        tagsList.addTags(input.value);
        input.value = '';
    }
})

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
    tagsList.addTags(input.value);
    input.value = '';
});

const checkBox = document.querySelector('.readOnly');
checkBox.addEventListener('change', () => {
    tagsList.toggleReadOnly();
    if (tagsList.readOnly) {
        addBtn.setAttribute('disabled', 'disabled');
    } else {
        addBtn.removeAttribute('disabled');
    }
});



