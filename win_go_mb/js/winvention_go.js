var doc = document;


//input 요소 클릭시 레이블 텍스트 사라짐
var phone_input = doc.querySelector('.fill_in_phone input');
var phone_label = doc.querySelector('.fill_in_phone label');

phone_input.onfocus = function(){
	phone_label.className = "off";
}
phone_input.onblur = function(){
	if(phone_input.value !== ''){
		phone_label.className = "off";
	} else {
		phone_label.className = "";
	}
}


// 참여방법 설명 레이어 닫기
var howto_layer_wrapper = doc.querySelector('.howto_layer_wrapper');
var howto_close_btn = doc.querySelector('.howto_container .close_desc_btn');

howto_close_btn.onclick = function() {
	howto_layer_wrapper.className = 'howto_layer_wrapper';
}



//윈스탑 돌리기

// 윕스탑 아이템 팝업 닫기
var item_popup_wrapper = doc.querySelector('.item_popup_wrapper');
var close_pop = doc.querySelector('.item_popup_container .close_pop');

close_pop.onclick = function() {
	item_popup_wrapper.className = 'item_popup_wrapper';
	inner_circle.className = 'inner_circle';
}


// 윈스탑 클릭 및 팝업 띄우기

var item_popup_wrapper = doc.querySelector('.item_popup_wrapper');
var inner_circle = doc.querySelector('.winstop .inner_circle');
var result_area = item_popup_wrapper.querySelector('.result_area');


var result_array = ["01", "02", "03"];

var event_result01 = "";
	event_result01 += "<em>윈볼을 획득했다</em>";
	event_result01 += "<p>윈볼 윈스템프 1개 획득</p>";
	event_result01 += "<img src=\"../images/section02/pop_winball.png\" alt=\"윈볼\">";

var event_result02 = "";
	event_result02 += "<em>슈퍼윈볼을 획득했다</em>";
	event_result02 += "<p>슈퍼윈볼 윈스템프 3개 획득</p>";
	event_result02 += "<img src=\"../images/section02/pop_superwinball.png\" alt=\"슈퍼윈볼\">";

var event_result03 = "";
	event_result03 += "<em>회복약을 획득했다</em>";
	event_result03 += "<p>회복약 윈스템프 0개 획득</p>";
	event_result03 += "<img src=\"../images/section02/pop_lot.png\" alt=\"회복약\">";


function pickRandom() {
	index = Math.floor(Math.random() * result_array.length);
	if(result_array[index] == '01') {
		item_popup_wrapper.className = 'item_popup_wrapper on';
		result_area.innerHTML = event_result01;
	}
	else if(result_array[index] == '02') {
		item_popup_wrapper.className = 'item_popup_wrapper on';
		result_area.innerHTML = event_result02;
	}
	else{
		item_popup_wrapper.className = 'item_popup_wrapper on';
		result_area.innerHTML = event_result03;
	}
}

function spinFast() {
	inner_circle.className = 'inner_circle spin_fast';
	setTimeout(pickRandom, 1500);
}

inner_circle.onclick = spinFast;