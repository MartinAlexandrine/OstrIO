const imgs = document.querySelectorAll('.contain-slides');
const suivant = document.querySelector('.right-button');
const precedent = document.querySelector('.left-button');
const cercles = document.querySelectorAll('.cercle');
const diapo = document.querySelector('.slider');
let index = 0;

suivant.addEventListener('click', slideSuivante);

function slideSuivante(){

    if(index < 3){

        imgs[index].classList.remove('active');
        index++;
        imgs[index].classList.add('active');

    }
    else if (index === 3) {

        imgs[index].classList.remove('active');
        index = 0;
        imgs[index].classList.add('active');

    }

    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }

}


precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){

    if(index > 0){

        imgs[index].classList.remove('active');
        index--;
        imgs[index].classList.add('active');

    }
    else if (index === 0) {

        imgs[index].classList.remove('active');
        index = 3;
        imgs[index].classList.add('active');

    }
    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }
}
document.addEventListener('keydown', keyPressed)

function keyPressed(e){

    if(e.keyCode === 37){
        slidePrecedente();
    } 
    else if (e.keyCode === 39) {
        slideSuivante();
    }

}


// Cercles 


cercles.forEach(cercle => {

    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');

        imgs[index].classList.remove('active');
        index = this.getAttribute('data-clic') - 1;
        imgs[index].classList.add('active');
    })

})

let timer = setInterval("slideSuivante()", 3500);

diapo.addEventListener("mouseover", stopTimer);
diapo.addEventListener("mouseout", startTimer);

function stopTimer(){
    clearInterval(timer);
}

function startTimer (){
    timer = setInterval("slideSuivante()", 3500);
}

