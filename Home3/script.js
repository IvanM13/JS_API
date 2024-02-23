'use strict';

const accessKEY = 'CycrgxFwHEm9dPLzaDJysaFoXyHhYDGTT3MDhxA5BVQ';

const likeCount = document.getElementById('likeCount');
const likeBtn = document.getElementById('like');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let liked = false;
let likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
let history = JSON.parse(localStorage.getItem('history')) || [];


async function getRandomImage() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKEY}`);
        const data = await response.json();
        const imageUrl = data.urls.regular;
        const photographerName = data.user.name;
        const photographerUsername = data.user.username;

        document.getElementById('image').src = imageUrl;
        document.getElementById('photographer').textContent = `Photographer: ${photographerName} (@${photographerUsername})`;

        // Check if image is already liked
        liked = likedImages.includes(imageUrl);
        updateLikeButton();

        // Add image to history
        history.unshift({ imageUrl, photographerName });
        localStorage.setItem('history', JSON.stringify(history));
    } catch (error) {
        console.error('Error fetching random image:', error);
    }
}

function updateLikeButton() {
    likeBtn.innerHTML = liked ? '❤️' : '❤️';
}

likeBtn.addEventListener('click', () => {
    liked = !liked;
    updateLikeButton();
    if (liked) {
        likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
        likedImages.push(document.getElementById('image').src);
    } else {
        likeCount.innerHTML = parseInt(likeCount.innerHTML) - 1;
        likedImages = likedImages.filter(image => image !== document.getElementById('image').src);
    }
    localStorage.setItem('likedImages', JSON.stringify(likedImages));
});

prevBtn.addEventListener('click', () => {
    if (history.length > 1) {
        history.shift();
        const prevImage = history[0];
        document.getElementById('image').src = prevImage.imageUrl;
        document.getElementById('photographer').innerHTML = `Photographer: ${prevImage.photographerName}`;
    } else {
        alert('No previous images');
    }
});

nextBtn.addEventListener('click', () => {
    if (history[history.length - 1]) {
        history.push();
        const nextImage = getRandomImage();
        document.getElementById('image').src = nextImage.imageUrl;
        document.getElementById('photographer').innerHTML = `Photographer: ${nextImage.photographerName}`;
    } else {
        alert('No previous images');
    }
});


window.onload = getRandomImage;