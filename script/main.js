'use strict'
let greet = document.querySelector('.greeting');

let arrows = document.querySelector('.arrows');

let startSection = document.querySelector('.start');

let lastScrollTop = 0;

let media = document.querySelector('.soc-medias');

let descript = document.querySelectorAll('.typewriter');

let prImages = document.querySelectorAll('.visual');

let scroll = document.querySelector('.cont');


    // console.log(window.pageYOffset);
    for (let i = 0; i < descript.length; i++) {
        scroll.addEventListener('scroll', ()=> {

            console.log(scroll.scrollTop);
            if (scroll.scrollTop >= 70) {
                arrows.style.opacity = '0';
            } else {
                arrows.style.opacity = '1';
            }
            if (scroll.scrollTop >= parseInt(getComputedStyle(startSection).height) * (i+1)) {
                if (getComputedStyle(descript[i]).opacity != '1'){
                    descript[i].style.opacity = '1';
                    descript[i].style.transform = 'translateX(0px)';
                    // printingOut(descript[i]);
                    console.log('haha');
                }
                if (getComputedStyle(prImages[i]).opacity != '1') {
                    prImages[i].style.opacity = '1';
                    prImages[i].style.transform = 'translateX(0px)';
                }
            }
            if (window.pageYOffset >= parseInt(getComputedStyle(startSection).height)){
                media.style.opacity = '1';
            } else {
                media.style.opacity = '0';
            }

        });
    
    }

function printingOut(block) {
    const res = block.innerHTML;
    block.innerHTML = "";
    const splitted = res.split('<nl\>');

    splitted.forEach(() => {
        const p = document.createElement('p');
        block.appendChild(p);
    });
    const paras = block.querySelectorAll('p');
    let i = 0;
    let currentPara = 0;
    const intervalId = setInterval(()=>{
        paras[currentPara].innerHTML += splitted[currentPara][i];
        i++;

        if (i === splitted[currentPara].length){
            currentPara++;
            i=0;
            if (currentPara === splitted.length) {
                clearInterval(intervalId);
            }
        }
    },20);
}