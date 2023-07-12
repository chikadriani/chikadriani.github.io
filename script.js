const menuToggle = document.querySelector('.menu-toggle input');
const navMid = document.querySelector('nav .NavBar .GroupNav .Mid');
const body = document.getElementById('body');
const arrowLeft = document.querySelector('#product-detail .arrow-left');
const arrowRight = document.querySelector('#product-detail .arrow-right');

menuToggle.addEventListener('click', function(){
    navMid.classList.toggle("tampil");
    body.classList.toggle("hidden-y");
});

function qna(numberClassNameQuestion){
    const qnaIcon = document.querySelector('#faq .right .qna .question .qna-icon.q' + numberClassNameQuestion );
    let qnaIconSRC = document.querySelector('#faq .right .qna .question .qna-icon.q' + numberClassNameQuestion ).getAttribute("src");
    const qnaAnswer = document.querySelector('#faq .right .qna .answer.a' + numberClassNameQuestion);
    
    if(qnaIconSRC == 'img/home-faq/Plus.png'){
        qnaIcon.src='img/home-faq/Minus.png';
        qnaIconSRC = document.querySelector('#faq .right .qna .question .qna-icon.q' + numberClassNameQuestion ).getAttribute("src");
        qnaAnswer.classList.add("active")
    }else{
        qnaIcon.src='img/home-faq/Plus.png';
        qnaIconSRC = document.querySelector('#faq .right .qna .question .qna-icon.q' + numberClassNameQuestion ).getAttribute("src");
        qnaAnswer.classList.remove("active")
    }
}

// carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('slide');
    var slidesSmall = document.getElementsByClassName('slide-small');

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i< slides.length ; i++){
        slides[i].style.display = 'none';

        slidesSmall[i].classList.remove('active-small');
    }
    slides[slideIndex-1].style.display = 'block';
    slidesSmall[slideIndex-1].classList.add('active-small')
}

