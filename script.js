// mobile menu eding 


let bar = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-xmark');
let down = document.querySelector('.nav');
bar.addEventListener('click',function () {
   
    down.classList.add('show');
})

close.addEventListener('click',function () {
   
    down.classList.remove('show');
})

// mobile sliding eding 

// let size =document.querySelector('.tab');
// let width = size.getBoundingClientRect().width;
// let height = size.getBoundingClientRect().height;
// console.log(width);
// console.log(height);
// size.addEventListener('click',function () {
//     alert()
// })


let move1 = document.querySelector('.simple');
let move2 = document.querySelector('.speedy');
let move3 = document.querySelector('.easy');
let target = document.querySelector('.scrollContainer');
let boxTarget = document.querySelector('.imgInfo')

move1.addEventListener('click',function () {
    target.classList.remove('move2');
    target.classList.remove('move3');
    
    boxTarget.classList.remove('show2');
    boxTarget.classList.remove('show3');




})

move2.addEventListener('click',function () {
    target.classList.remove('move3');
    target.classList.add('move2');
    
    boxTarget.classList.remove('show3');
    boxTarget.classList.add('show2');
})


move3.addEventListener('click',function () {
    target.classList.remove('move2');
    target.classList.add('move3');

    boxTarget.classList.remove('show2');
    boxTarget.classList.add('show3');
})

// add.addEventListener('click',function (e) {
//     if(e.target.classList.contains('p2')){
//         let pop = document.querySelector('.scrollContainer');
//         pop.classList.add('move2');
//     }
    
//     else if(e.target.classList.contains('p3')){
//         let pop = document.querySelector('.scrollContainer');
//         pop.classList.add('move3');
//     } 
    
//     else if(e.target.classList.contains('p3')){
//         let pop = document.querySelector('.scrollContainer');
//         pop.classList.remove('move3');
//         pop.classList.remove('move2');
//     }
// })


let questions = document.querySelectorAll('.drawer');

for(let i = 0; i < questions.length;i++){
    questions[i].addEventListener('click',function (e) {
       this.classList.toggle('grow');
    })
}

window.addEventListener('scroll',function () {
    if(this.pageYOffset > 100){
        document.querySelector('.main').classList.add('scrollup');
    }
    else{
        document.querySelector('.main').classList.remove('scrollup');
    }
})
































