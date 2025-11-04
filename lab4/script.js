document.addEventListener('DOMContentLoaded', () => {

    //Завдання 1
    const element7 = document.getElementById('element-7');
    let element7Toggled = false;

    element7.addEventListener('click', () => {
        const target = document.getElementById('element-7');

        if (element7Toggled) {
            target.style.backgroundColor = '';
            target.style.color = '';
        } else {
            target.style.backgroundColor = '#fff9c4';
            target.style.color = '#b71c1c';
        }
        element7Toggled = !element7Toggled;
    });


    const element8 = document.querySelector('#element-8');
    let element8Toggled = false;

    element8.addEventListener('click', () => {
        const target = document.querySelector('#element-8');

        if (element8Toggled) {
            target.style.backgroundColor = '';
            target.style.color = '';
        } else {
            target.style.backgroundColor = '#c8e6c9';
            target.style.color = '#1b5e20';
        }
        element8Toggled = !element8Toggled;
    });

    //Завдання 2

    const img = document.getElementById('city-image');
    const btnAdd = document.getElementById('btn-add');
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnDelete = document.getElementById('btn-delete');

    const gallery = document.getElementById('image-gallery');

    const baseWidth = 400;
    let currentWidth = img.width || baseWidth;
    img.style.width = currentWidth + 'px';


    btnAdd.addEventListener('click', () => {
        const newImage = document.createElement('img');

        newImage.src = img.src;
        newImage.alt = 'Нове фото міста';
        newImage.className = 'dynamic-image';

        gallery.appendChild(newImage);
    });

    btnZoomIn.addEventListener('click', () => {
        currentWidth += 25;
        img.style.width = currentWidth + 'px';
    });

    btnZoomOut.addEventListener('click', () => {
        if (currentWidth > 50) {
            currentWidth -= 25;
            img.style.width = currentWidth + 'px';
        }
    });

    btnDelete.addEventListener('click', () => {
        const lastAddedImage = gallery.lastElementChild;
        if (lastAddedImage) {
            gallery.removeChild(lastAddedImage);
        }
    });

});