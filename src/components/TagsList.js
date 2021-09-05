export default class TagsList {
    tags = new Set();

    readOnly = false;

    tagsList;

    constructor(tagsList) {
        let tags = localStorage.getItem('tags');
        if (tags) {
          this.tags = new Set(JSON.parse(tags));
        }
        this.tagsList = tagsList;
        this.render();
    }

    toggleReadOnly () {
        this.readOnly = !this.readOnly;
    }

    addTags (tags) {
        if (!this.readOnly) {
            tags.split(',').map(elem => elem.trim()).forEach(elem => {
                if (elem) {
                    this.tags.add(elem);
                }
            });
            localStorage.setItem('tags', JSON.stringify([...this.tags]));
            this.render();
        }
    }

    removeTag (tag) {
        if (!this.readOnly) {
            this.tags.delete(tag);
            localStorage.setItem('tags', JSON.stringify([...this.tags]));
            this.render();
        }
    }

    render () {
        this.tagsList.innerHTML = '';

        this.tags.forEach(elem => {
            let tag = document.createElement('div');
            let tagText = document.createElement('span');
            let removeBtn = document.createElement('button');

            removeBtn.innerHTML = '&#10006;';
            removeBtn.classList.add('removeBtn');
            removeBtn.addEventListener('click', () => this.removeTag(elem));
            tagText.innerText = elem;
            tag.append(tagText, removeBtn);
            this.tagsList.append(tag)
        })
    }

}