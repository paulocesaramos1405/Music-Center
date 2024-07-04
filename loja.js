let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('#container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let numberDisplay = indicator.querySelector('.number');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    // Remove a classe 'active' do item antigo e do ponto antigo
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');
    dots[active].classList.remove('active');
    
    // Atualiza o índice ativo
    items[active].classList.add('active');
    dots[active].classList.add('active');
    
    // Atualiza o número do produto
    numberDisplay.innerHTML = '0' + (active + 1);
}

nextButton.onclick = () => {
    active = active < lastPosition ? active + 1 : firstPosition;
    setSlider();
};

prevButton.onclick = () => {
    active = active > firstPosition ? active - 1 : lastPosition;
    setSlider();
};

// Atualizar a interface inicialmente
items[active].classList.add('active');
dots[active].classList.add('active');
numberDisplay.innerHTML = '0' + (active + 1);
