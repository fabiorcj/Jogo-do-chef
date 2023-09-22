const chef = document.querySelector ('.chef');
const cao = document.querySelector ('.cao');
const fundo = document.querySelector ('.fundo');
const bomba = document.querySelector ('.bomba');
const leite = document.querySelector ('.leite');
const trigo = document.querySelector ('.trigo');
const ovo = document.querySelector ('.ovo');
const pao = document.querySelector ('.pao');
const ovoChocado = document.querySelector ('.ovoChocado');
const botao = document.querySelector ('.botao')

const jump = () => { 
    chef.classList.add('jump');

    setTimeout(() => {
       chef.classList.remove('jump');
   }, 1000)
}
const loop = setInterval(() => { 

const leitePosition = leite.offsetLeft;
const ovoPosition = ovo.offsetLeft; 
const ovoChocadoPosition = ovoChocado.offsetLeft;
const bombaPosition = bomba.offsetLeft;
const caoPosition = cao.offsetLeft;
const fundoPosition = fundo.offsetLeft; 
const trigoPosition = trigo.offsetLeft;

const chefPosition = +window.getComputedStyle(chef).bottom.replace('px', '');
console.log(trigoPosition);
console.log(ovoPosition);
console.log(leitePosition);

if (caoPosition <= 60 && chefPosition < 50) {

    cao.style.animation = 'none';
    cao.style.left = `${caoPosition}px`;
    chef.style.animation = 'none';
    chef.style.bottom = `${chefPosition}px`;
    fundo.style.left = `${fundoPosition}px`; 
    fundo.style.animation = 'none';
    bomba.style.animation = 'none';
    bomba.style.left =  `${bombaPosition}px`;

    cao.src = '/assets/img/caoyes2.png';
    chef.src = '/assets/img/chora.png';
    
    botao.style.display = "block"; 
    

    clearInterval(loop);
     
} else if(ovoPosition ===30 && leitePosition ===30 && trigoPosition === 30){

    pao.style.display = "block";
    botao.style.display = "block"; 

} else if( trigoPosition <= 60 && chefPosition > 50) {

    trigo.style.top = '80px';
    trigo.style.left = '30px';
    trigo.src = '/assets/img/trigo.png';
}
else if( leitePosition <= 60 && chefPosition > 50) {

    leite.style.left = '30px';
    leite.style.top = '20px';
    leite.src = '/assets/img/leite.png';

} else if (ovoPosition <= 60 && chefPosition < 50){  

    ovo.style.left = '30px';
    ovo.style.top = '160px';

} else if ( ovoChocadoPosition <= 60 && chefPosition < 50){
    
    ovoChocado.style.left = `${ovoChocadoPosition}px`;
    ovoChocado.src = '/assets/img/pintinho.png';

} 


}, 10) ;


document.addEventListener('keydown', jump);