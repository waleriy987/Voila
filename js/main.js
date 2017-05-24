$('.header_menu li').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active');
});

var $btn_open = document.getElementById('header_btn_open');
var $menu = document.getElementById('mobile_menu');
function openmenu() {	
	$menu.classList.add('menu_active');
	var pos = -250;
	var id = setInterval(frame, 2);
	function frame() {
		if (pos == 0) {
			clearInterval(id);
		}
		else{
			for (var i = 0; i < 10; i++) {
				pos++;
				$menu.style.left = pos + "px ";
			}
		}
	}
}
function closemenu() {	
	var pot = 0;
	var ig = setInterval(frame, 2);
	function frame() {
		if (pot == -250) {
			clearInterval(ig);
		}
		else{
			for (var i = 0; i < 10; i++) {
				pot--;
				$menu.style.left = pot + "px ";
			}
		}
	}
}
	var $footer_menu_box = document.getElementById('footer_navigation_menu');

	var $footer_btn_open = document.getElementById('footer_button_open');

	var $footer_btn_close = document.getElementById('footer_menu_close');

function footer_menu_open() {
	$footer_menu_box.classList.add('menu_active');
	var pww = -250;
	var rt = setInterval(frame, 2);
	function frame() {
		if (pww == 0) {
			clearInterval(rt);
		}
		else{
			for (var i = 0; i < 10; i++) {
				pww++;
				$footer_menu_box.style.left = pww + "px ";
			}
		}
	}
}
function footer_menu_close() {
	var pwu = 0;
	var rm = setInterval(frame, 2);
	function frame() {
		if (pwu == -250) {
			clearInterval(rm);
		}
		else{
			for (var i = 0; i < 10; i++) {
				pwu--;
				$footer_menu_box.style.left = pwu + "px ";
			}
		}
	}
	 location.reload();
}


var $months = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря'];

var $dat = new Date();
var $day = $dat.getDate() + " " + $months[$dat.getMonth()] + " " + $dat.getFullYear() + " года" + "<br />";
var $times = $dat.getHours() + ' часов ' + $dat.getMinutes() + ' минут';

function ancket() {

	var $form = document.getElementById('add_form');
	var $name = document.getElementById('add_name').value;
	var $date = document.getElementById('add_date').value;
	var $time = document.getElementById('add_time').value;
	var $commensals = document.getElementById('add_commensals').value;
	var $submit = document.getElementById('add_submit');
	var $container_wrap = document.getElementById('wrap_block');


	
	var $block_dok = document.createElement('div');

	$block_dok.classList.add('modal_window');

	$container_wrap.appendChild($block_dok);

	var $anket_box = document.createElement('div');

	$block_dok.appendChild($anket_box);

	$anket_box.classList.add('modal_block');

	$anket_box.innerHTML = "Проверьте данные резервирования !!!" + "<br />" + "время резервирования :" + $day + $times;


	var $text_name = document.createElement('p');

	$text_name.classList.add('text_name');

	$anket_box.appendChild($text_name);

	$text_name.innerHTML = "Имя : " + $name;

	if ($name == '') {
		$text_name.innerHTML = "Имя : " + "-- не указано --";
	}


	var $text_date = document.createElement('p');

	$text_date.classList.add('text_name');

	$anket_box.appendChild($text_date);

	$text_date.innerHTML = "Дата : " + $date;

	if ($date == '') {
		$text_date.innerHTML = "Дата : " + "-- не указана --";
	}


	var $text_time = document.createElement('p');

	$text_time.classList.add('text_name');

	$anket_box.appendChild($text_time);

	$text_time.innerHTML = "Время : " + $time;

	if ($time == '') {
		$text_time.innerHTML = "Время : " + "-- не указано --";
	}


	var $text_commensals = document.createElement('p');

	$text_commensals.classList.add('text_name');

	$anket_box.appendChild($text_commensals);

	$text_commensals.innerHTML = "Сотрапезник : " + $commensals;


	if ($commensals == '') {
		$text_commensals.innerHTML = "Сотрапезник : " + "-- не указан --";
	}

	var $btn_res = document.createElement('button');

	$btn_res.innerHTML = "зарезервировать";

	$anket_box.appendChild($btn_res);

	$btn_res.onclick = function() {

		if ($name == '' && $date == '' && $time == '') {

			location.reload();
		}

		$form.reset();

		$anket_box.style.display = "none";
		
		var $money = document.createElement('div');

		$money.classList.add('modal_block');

		$block_dok.appendChild($money);

		$money.innerHTML = "Способ оплаты :";

	}

}