let textTag = document.querySelector('.section1 h1');
let text= textTag.textContent;

let splittedText = text.split('');
textTag.innerHTML='';

for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] === " "){
        splittedText[i] = "&nbsp;";
    }

    textTag.innerHTML +=`<span>${splittedText[i]}</span>`;
}
let spans = textTag.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {
    let singleSpan = spans[k];

    singleSpan.className= 'fadeMove';
    k++;

    if (k === spans.length) {
        clearInterval(interval);
    }
}, 50);


//==========BORDER LINE ======================
let border = document.querySelector('.border-line')
let animationWidth = 0; // na pocetku je 0 border line


window.onscroll = () => {
     
    if(this.oldScroll > this.scrollY){
        animationWidth -= 9;
    } else {
        animationWidth += 9;
    }

    if(animationWidth >= 100) { // ogranicimo animaciju da ne prelazi sirinu
        animationWidth = 100;  // prozora, znaci ako je aW veci od 100 neka bude 100.
    }  
       
    if(animationWidth <0){     // da ne ide u minus 
        animationWidth = 0;
    }

     // da se dodaje += po 10 procenta kad scroll
    
    border.style.width = animationWidth + '%'; // 
    
     console.log(animationWidth)
    this.oldScroll = this.scrollY

 //==========SLIKE===============
 
 /* IMAGEANIMATION() // - kasnije samo pozovemo ovde funkciju kad je ispo napravimo 
}

const IMAGEANIMATION = () => {
    let sectionforAnimation = document.querySelector('.section2 .images')
 let sectionPosition = sectionforAnimation.getBoundingClientRect().top; // da vidimo koliko je udaljen od topa stranice
 let screenPosition = window.innerHeight / 1.3; // da vidimo visinu screena
 console.log(screenPosition)
 console.log(sectionPosition)
 let leftImage = document.querySelector('.slideFromLeft'); //selektujemo obe slike

 let rightImage = document.querySelector('.slideFromRight'
 
 if(sectionPosition < screenPosition){  // stavljamo uslov da se animacija aktivira kad dodjemo do slike 
 
 leftImage.classList.add('animated');  // dodajemo im classu iz css i krece animacija
 rightImage.classList.add('animated')
}
*/

let images = document.querySelectorAll('.images img')
let leftBtn = document.querySelector('.leftButton')
let rightBtn = document.querySelector('.rightButton')


let imgNum = 0; 
rightBtn.addEventListener('click', () => {
  displayNone()
  imgNum++

  if(imgNum === images.length){
    imgNum = 0; 
  }
  images[imgNum].style.display = 'block';
})
leftBtn.addEventListener('click', () => {
displayNone()
imgNum--; 

if(imgNum === -1) {
    imgNum = images.length -1; 
}
images[imgNum].style.display = 'block';
})
const displayNone = () => {
    images.forEach((img) => {
        img.style.display = 'none';
    })
}
};