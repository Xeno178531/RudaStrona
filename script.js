// Skrypt przewijający na górę po kliknięciu przycisku
document.getElementById('goTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};