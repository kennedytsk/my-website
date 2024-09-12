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
    'ptaki.jpg',
    'certificate.jpg',
    'prackticies.jpg'
    
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
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const icon = document.querySelector('.theme-toggle i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }


    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle i').classList.add('fa-sun');
    }
};

