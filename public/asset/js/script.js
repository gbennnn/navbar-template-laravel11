const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e
        .name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

// Tutup menu saat klik di luar menu
document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger').children[0]; // Ambil ion-icon di dalam span
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger === event.target;

    // Jika klik di luar menu dan bukan di hamburger icon
    if (!isClickInsideMenu && !isClickOnHamburger && hamburger.name === 'close') {
        hamburger.name = "menu";
        navMenu.classList.remove('top-[80px]');
        navMenu.classList.remove('opacity-100');
    }
});