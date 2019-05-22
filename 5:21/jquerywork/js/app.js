$(function(){
	//ここからjQueryをかく
	//ボタンサイズを変更（大きく）
	$('#js-click-btn').on('click',function(){
		$(this).addClass('large-btn');
	});

	// ボタンをマウスオーバーで半透明にする
	$('#js-hover-btn').mouseover(function(){
		$(this).addClass('opacity');
	}).mouseleave(function(){
		$(this).removeClass('opacity');
	});

	//要素の表示切り替え
	$('#js-show-btn').on('click',function(){
		$('#js-target-element').fadeIn(3000);
	});

	$('#js-hide-btn').on('click',function(){
		$('#js-target-element').fadeOut(2000);
	});

	//要素の追加
	$('#js-add-btn').on('click',function(){
		$(this).before('<li class="btn">ボタンの前に追加</li>');
		$(this).after('<li class="btn">ボタンの後に追加</li>');
	});


    //要素の追加
	$('#js-add-btn2').on('click',function(){
		$(this).prepend('<li>前</li>');
		$(this).append('<li>後</li>');
	});


	//toggleメニュー
	$('.js-toggle').on('click',function(){
		$(this).toggleClass('on');
		$(this).siblings().slideToggle();
	});


	//ハンバーガーリスト
	$('.js-hamburger').on('click',function(){
		$(this).toggleClass('on');
	});

	//スムーズページトップに戻る
	$('.js-scroll').on('click',function(){
		$('body, html').animate({ scrollTop: 0 }, 500);
	});

	//モーダル
	$('.js-modal').on('click', function(){
		$('.modal-content').fadeIn('slow');
		$('#modal-bg').fadeIn('slow');

	});

	$('.js-modal-close').on('click', function(){
		$('.modal-content').fadeOut(1000);
		$('#modal-bg').fadeOut(1000);

	});

	//タブ
	$('.tab-nav a').on('click', function(){
		if ($(this).hasClass('active')) {
			return false;
		} 

		$('.tab-nav a').removeClass('active');
		$(this).addClass('active');

		$('.tab-content > div').removeClass('active');
		$('.tab-content > div').filter(this.hash).addClass('active');
	});

	// スライダー
    var slideWidth = $('.slide').outerWidth();
    var slideNum = $('.slide').length;
    var slideWrapperWidth = slideWidth * slideNum;
    var currentSlide = 0;
    $('.slide-wrapper').css('width', slideWrapperWidth);
  
    //次へ
    $('.next-slider').on('click', function() {
      //最後のスライドだった場合
      if(currentSlide >= slideNum -1){
        return false;
      }
      currentSlide++;
      slide();
    });
  
    //前へ
    $('.prev-slider').on('click', function() {
      //最初のスライドだった場合
      if(currentSlide <= 0){
        return false;
      }
      currentSlide--;
      slide();
    });
  
    function slide() {
      $('.slide-wrapper').stop().animate({
        left: currentSlide * -slideWidth
      });
    }
});

// 課題　かっこいいハンバーガーメニューを作る 
  $(function () {
    $("#nav-open").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $("#nav-content").removeClass("open").fadeOut(100);
      } else {
        $(this).addClass("active");
        $("#nav-content").fadeIn(100).addClass("open");
      }
    });
  });