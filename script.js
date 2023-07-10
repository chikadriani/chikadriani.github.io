const menuToggle = document.querySelector('.menu-toggle input');
const navMid = document.querySelector('nav .NavBar .GroupNav .Mid');
// const qnaIcon1 = document.querySelector('#faq .right .qna .question .qna-icon.q1');
// let qnaIcon1SRC = document.querySelector('#faq .right .qna .question .qna-icon.q1').getAttribute("src");
// const qnaAnswer1 = document.querySelector('#faq .right .qna .answer.a1');
const body = document.getElementById('body');

menuToggle.addEventListener('click', function(){
    navMid.classList.toggle("tampil");
    body.classList.toggle("hidden-y");
});

function qna(numberClassNameQuestion){
    const qnaIcon = document.querySelector('#faq .right .qna .question .qna-icon.q' + numberClassNameQuestion );
    let qnaIconSRC = document.querySelector('#faq .right .qna .question .qna-icon.q' + numberClassNameQuestion ).getAttribute("src");
    const qnaAnswer = document.querySelector('#faq .right .qna .answer.a1');
    
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
