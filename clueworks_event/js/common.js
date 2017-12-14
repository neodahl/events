/***********
* 버튼 스크롤 이벤트
************/
var product_detail = document.querySelector('.product_detail');
var register_button = document.querySelector('.intro .btn_area')
var sticky_after = product_detail.offsetTop;

window.onscroll = function(){
    var presentY = window.pageYOffset;
        if(presentY >= sticky_after) {
            register_button.classList.add('fixed');
        }
        else {
            register_button.classList.remove('fixed');
        }
}

/***********
* input
************/
var input = document.querySelectorAll('.input_wrapper input');
var input_label = document.querySelectorAll('.input_wrapper input + label');

for(var i=0; i<input.length; i++) {
    input[i].index = i;
    input[i].onfocus = onfocus_input;
    input[i].onblur = onblur_input;
}

function onfocus_input() {
    input_label[this.index].classList.add('off');
}

function onblur_input() {
    if(input[this.index].value !== ''){
        input_label[this.index].classList.add('off');
    } else {
        input_label[this.index].classList.remove('off');
    }
}


/***********
* 팝업 열고 닫기
************/
var interest_registration_popup = document.querySelector('#interest_registration');
var completed_popup = document.querySelector('#registraion_complete');

var interest_button = document.querySelector('.section01 .bg_magenta');
var close_registration_button = document.querySelector('.popup_wrapper .close_pop')
var close_completed_button = document.querySelector('.popup_wrapper.complete .bg_black')

interest_button.onclick = function() {
    interest_registration_popup.classList.add('open');
}

close_registration_button.onclick = function() {
    interest_registration_popup.classList.remove('open');
}

close_completed_button.onclick = function() {
    completed_popup.classList.remove('open');
    interest_registration_popup.classList.remove('open');
}


// 완료 팝업 열기
var interest_registration_button = document.querySelector('#interest_registration .btn_area a');
interest_registration_button.onclick = function() {
    completed_popup.classList.add('open');
}




/***********
* 약관 열고 닫기
************/
var view_term01 = document.querySelector('#term01 .term_show');
var view_term02 = document.querySelector('#term02 .term_show');
var term01 = document.querySelector('#term01 .term_box pre');
var term02 = document.querySelector('#term02 .term_box pre');

view_term01.onclick = function open_term01() {
    term01.classList.toggle('open');
}
view_term02.onclick = function open_term02() {
    term02.classList.toggle('open');
}