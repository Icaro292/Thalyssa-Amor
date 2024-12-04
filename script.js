
const dataNamoro = new Date('2024-08-16T00:00:00');

function atualizarContagem() {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarContagem, 1000);

atualizarContagem();

const imagens = [
    'img/img2.jpeg',
    'img/img1.jpeg',
    'img/img3.jpg',
    'img/img4.jpg'
];

let indiceAtual = 0;

function mudarImagem() {
    const imgElement = document.getElementById('imagem');

    imgElement.style.opacity = 0; 
    setTimeout(() => {
        imgElement.src = imagens[indiceAtual];
        imgElement.style.opacity = 1;
    }); 

    indiceAtual = (indiceAtual + 1) % imagens.length;
}

setInterval(mudarImagem, 3000);

mudarImagem();