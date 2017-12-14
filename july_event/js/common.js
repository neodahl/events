/*룰렛*/
var event_result_area = document.getElementById('event_result_area');

// 객체생성
var theWheel = new Winwheel({
	'numSegments'  : 4,     // 룰렛 이벤트 갯수 설정
	'outerRadius'  : 212,   // 이벤트 바깥 라인 radius 디자인에 따라 설정 변경 가능
	'textFontSize' : 13,    // 폰트 사이즈 설정
	'drawMode'     : 'segmentImage',
	'segments'     :        // 개체 설정
	[
		{'strokeStyle' : '#fff' ,'image' : 'images/slice01.png', 'text' : 'icecream'},
		{'strokeStyle' : '#fff' ,'image' : 'images/slice02.png', 'text' : 'cider'},
		{'strokeStyle' : '#fff' ,'image' : 'images/slice03.png', 'text' : 'lose'},
		{'strokeStyle' : '#fff' ,'image' : 'images/slice04.png', 'text' : 'ocean'}
	],
	'animation' :           // 애니메이션 스펙 설정
	{
		'type'     : 'spinToStop',
		'duration' : 4,     // 시간 설정 (second)
		'spins'    : 10,     // 스핀 수
		'callbackFinished' : 'popupDuration()' //alert 설정
	}
});

//초기화 변수
var wheelPower    = 0;
var wheelSpinning = false;

// 이벤트 호출
function startSpin() {
	//  회전중일때 다시 클릭할 수 없게 하도록 false를 줌
	if (wheelSpinning == false){
		if (wheelPower == 1){
		} else if (wheelPower == 2){
			theWheel.animation.spins = 8;
		} else if (wheelPower == 3){
			theWheel.animation.spins = 15;
		}
		// 스핀이 도는 동안 다시 클릭 할 수 없도록 비활성화.
		document.getElementById('spin_button').className = "";
		// 애니메이션 호출
		theWheel.startAnimation();
		//스핀을 재 설정을 위한 변수
		wheelSpinning = true;
	}
}

// 매개 변수에서 콜백을 지정했기 때문에 휠의 콜백 기능으로 스핀 애니메이션이 완료되면 호출됨
function alertPrize(){
	// 세그먼트 호출
	var winningSegment = theWheel.getIndicatedSegment();
	// console.log("winningSegment : ", winningSegment);

	var event_result01 = "" ;
		event_result01 += "<img src='images/result_01.png' alt='축하합니다! 베스킨라빈스 싱글레귤러 당청'>";
		event_result01 += "<div class='btn_result_area'><button type='button' id='btn_result_ok'>확인</button></div>";

	var event_result02 = "";
		event_result02 += "<img src='images/result_02.png' alt='축하합니다! GS25 칠성 사이다 250ml 당첨'>";
		event_result02 += "<div class='btn_result_area'><button type='button' id='btn_result_ok'>확인</button></div>";

	var event_result03 = "";
		event_result03 += "<img src='images/result_03.png' alt='실망하지마세요. 내일 또 도전 할 수 있습니다!'>";
		event_result03 += "<div class='btn_result_area'><button type='button' id='btn_result_ok'>확인</button></div>";

	var event_result04 = "";
		event_result04 += "<img src='images/result_04.png' alt='오션월드 응모권 당첨 응모완료!' class='img_tune'>";
		event_result04 += "<div class='btn_result_area'><button type='button' id='btn_result_ok'>확인</button></div>";


	if (winningSegment.text == 'icecream'){
		event_result_area.className = "event_result_area on";
		event_result_area.innerHTML = event_result01;
	} else if (winningSegment.text == 'cider') {
		event_result_area.className = "event_result_area on";
		event_result_area.innerHTML = event_result02;
	} else if (winningSegment.text == 'lose'){
		event_result_area.className = "event_result_area on";
		event_result_area.innerHTML = event_result03;
	} else if (winningSegment.text == 'ocean'){
		event_result_area.className = "event_result_area on";
		event_result_area.innerHTML = event_result04;
	}

	var btn_result_ok = document.getElementById('btn_result_ok');

	btn_result_ok.onclick = function(){
		event_result_area.className = "event_result_area"; //결과창 on 클래스 제거
		resetWheel();
	}
}
// 상품 호출 타임아웃 지정
function popupDuration() {
	setTimeout(alertPrize, 300);
}
// reset button.
function resetWheel(){
	theWheel.stopAnimation(false);	// 애니메이션 멈춤
	theWheel.rotationAngle = 0;		// 휠 각도를 다시 0으로 맞춤
	theWheel.draw();

	wheelSpinning = false;	// 전원 버튼을 false로 재 설정하면 스핀을 다시 클릭 할 수 있음
}


/*탭 컨트롤*/
$('.tab_btn_container button').on('click',function(){
	$('.tab_btn_container button').removeClass('on');
	$(this).addClass('on');
	var idx = $(this).index();
	$('.tab_content').removeClass('on');
	$('.tab_content').eq(idx).addClass('on');
})