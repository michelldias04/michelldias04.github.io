const heart = document.getElementById('heart');
const images = document.getElementById('images');

let isOpen = false;

heart.addEventListener('click', () => {
    if (!isOpen) {
        heart.style.backgroundImage = "url('coracao-aberto.png')"; // Imagem do coração aberto
        images.style.display = 'block';
        isOpen = true;
    } else {
        heart.style.backgroundImage = "url('coracao-fechado.png')"; // Imagem do coração fechado
        images.style.display = 'none';
        isOpen = false;
    }
});
