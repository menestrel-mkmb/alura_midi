const buttonNames = document.querySelectorAll('.tecla');
const soundNames = document.querySelectorAll('.sounds');

function tocaSom(i){
    if(typeof(i) == 'number' && i >=0 && i < buttonNames.length){
        buttonNames[i].onclick = function(){
            soundNames[i].play();
        };
    }
}

for(var index = 0; index < buttonNames.length; index ++){
    tocaSom(index);
    const tecla = buttonNames[index];

    tecla.onkeydown = function(event){
        if( event.code === 'Space' || event.code === 'Enter')
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(event){
        if( event.code === 'Space' || event.code === 'Enter')
            tecla.classList.remove('ativa');
    }
}