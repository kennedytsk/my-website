let currentImageIndex = 0;
const images = [
    'payment.png',
    'liga.jpg',
    'automat.png',
    'faceit.jpg',
    'peoples.jpg',
    'matma.jpg',
    'matma01.jpg',
    'lotnisko.jpg',
    'salon1.jpg',
    'pracownicy.jpg',
    'sklep.jpg',
    'portal.jpg',
    'certificate.jpg'
];

function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = src;

    currentImageIndex = images.indexOf(src);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function changeImage(n) {
    currentImageIndex = (currentImageIndex + n + images.length) % images.length;
    document.getElementById('modalImage').src = images[currentImageIndex];
}
