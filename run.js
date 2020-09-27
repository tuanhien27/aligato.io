// theme change

var bgIntroduce = document.querySelector('.wrap-introduce-total');
var bgIntroduce2 = document.querySelector('.introduce-total');
var bgTopPost = document.querySelector('.top-post');
var bgWrapLetter = document.querySelector('.wrap-letter');
var bgLetter = document.querySelector('.letter');
var bgLetterSpace = document.querySelector('.letter-space');
var bgCourses = document.querySelector('.course');
var bgFooter = document.querySelector('.footer-test');
var colorText = document.querySelectorAll('.letter p');
var colorText2 = document.querySelectorAll('.letter-ul li');
var dialogBox = document.querySelectorAll('.dialog-box');
var boxSpecial = document.querySelectorAll('.box-special');
var colorFooter = document.querySelectorAll('.item-show');
var bgButton = document.querySelectorAll('.btn');

function changeTheme(color) {
    console.log('tôi là hiển'+ color);
    
    if (color == 'white') {
        bgIntroduce.style.backgroundColor = color;
        bgTopPost.style.backgroundColor = color;
        for (let i = 0; i < bgButton.length; i++) {
            bgButton[i].style.backgroundColor = '#F9F9F9';
        }
        bgCourses.style.backgroundColor = color;
        bgFooter.style.backgroundColor = color;
        bgLetterSpace.style.backgroundColor = color;
        for (let i = 0; i < colorText.length; i++) {
            colorText[i].style.color = '#86786B';
        }
        for (let i = 0; i < colorText2.length; i++) {
            colorText2[i].style.color = '#86786B';
        }
        for (let i = 0; i < dialogBox.length; i++) {
            dialogBox[i].style.backgroundColor = '#F9F9F9';
        }
        bgLetter.style.backgroundColor = '#FEFAEC';
        bgWrapLetter.style.backgroundColor = '#FEFAEC';
        bgIntroduce2.style.backgroundColor = 'green';
        for (let i = 0; i < boxSpecial.length; i++) {
            boxSpecial[i].style.backgroundColor = 'green';
        }
        for (let i = 0; i < colorFooter.length; i++) {
            colorFooter[i].style.backgroundColor = '#FDF9EA';
        }
    } else if (color == 'solarized') {
        bgIntroduce.style.backgroundColor ='#FDF6E3'
        bgIntroduce2.style.backgroundColor = '#BAB4A4';
        bgTopPost.style.backgroundColor = '#FDF6E3';
        for (let i = 0; i < bgButton.length; i++) {
            bgButton[i].style.backgroundColor = '#F9F6EC';
        }
        bgCourses.style.backgroundColor = '#FDF6E3';
        bgFooter.style.backgroundColor = '#FDF6E3';
        bgLetterSpace.style.backgroundColor = '#FDF6E3';
        for (let i = 0; i < colorText.length; i++) {
            colorText[i].style.color = '#86786B';
        }
        for (let i = 0; i < colorText2.length; i++) {
            colorText2[i].style.color = '#86786B';
        }
        for (let i = 0; i < dialogBox.length; i++) {
            dialogBox[i].style.backgroundColor = '#F9F6EC';
        }
        bgLetter.style.backgroundColor = '#FEFAEC';
        bgWrapLetter.style.backgroundColor = '#FEFAEC';
        for (let i = 0; i < boxSpecial.length; i++) {
            boxSpecial[i].style.backgroundColor = '#D4CEBC';
        }
        for (let i = 0; i < colorFooter.length; i++) {
            colorFooter[i].style.backgroundColor = '#FDF9EA';
        }
    } else if (color == 'solarizedDark') {
        bgIntroduce.style.backgroundColor ='#013340';
        bgIntroduce2.style.backgroundColor = '#021E25';
        bgTopPost.style.backgroundColor = '#013340';
        for (let i = 0; i < bgButton.length; i++) {
            bgButton[i].style.backgroundColor = '#073641';
        }
        bgCourses.style.backgroundColor = '#002B36';
        bgFooter.style.backgroundColor = '#002B36';
        bgLetterSpace.style.backgroundColor = '#002B36';
        for (let i = 0; i < colorText.length; i++) {
            colorText[i].style.color = '#86786B';
        }
        for (let i = 0; i < colorText2.length; i++) {
            colorText2[i].style.color = '#86786B';
        }
        for (let i = 0; i < dialogBox.length; i++) {
            dialogBox[i].style.backgroundColor = '#073641';
        }
        bgLetter.style.backgroundColor = '#013340';
        bgWrapLetter.style.backgroundColor = '#013340';
        for (let i = 0; i < boxSpecial.length; i++) {
            boxSpecial[i].style.backgroundColor = '#011C23';
        }
        for (let i = 0; i < colorFooter.length; i++) {
            colorFooter[i].style.backgroundColor = '#003D4C';
        }
    } else {
        window.onload;
    }
    
}


// ô Search thay đổi chiều rộng
var bodyPage = document.querySelector('body');
var inputSearch = document.querySelector('.input-search');

function runSearch() {
    inputSearch.style.width = "150px";
}

bodyPage.onclick = function(e) {
    let isClickInside = inputSearch.contains(e.target);
    if (isClickInside) {
        console.log('click trong');
    } else {
        console.log('click ngoài');
        inputSearch.style.width = "105px";
    }
}