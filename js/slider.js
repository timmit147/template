const imagesContainer = document.querySelector('.slider .images');
const images = imagesContainer.querySelectorAll('img');
const duplicates = [];

images.forEach(image => {
    const duplicate = image.cloneNode(true);
    duplicates.push(duplicate);
});

duplicates.forEach(duplicate => {
    imagesContainer.appendChild(duplicate);
});
