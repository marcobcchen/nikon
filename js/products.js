$(function(){
  var series = 1;

  $('.products-nav a').on('click', function(){
    var _index = $(this).index();
    var _num = _index + 1;
    
    if(_num == series) return false;
    change(_num);
    series = _num;

    return false;
  });

  var search = window.location.search;
  
  if(search){
    var page = Util.toGetParam('page');

    change(page);
    series = page;
  }

  function change(_num){
    $('.products-nav a').removeClass('opened');
    $('.products-nav a:nth-child(' + _num + ')').addClass('opened');
    $('.products').fadeOut();
    $('.products-' + _num).fadeIn();
  }
});

var  Util = {
	toGetParam:function(name, casesensitive) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var href = window.location.href;
			
		if (!casesensitive) name = name.toLowerCase();
		if (!casesensitive) href = href.toLowerCase();
			
		var regexS = "[\\?&]" + name + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(href);

		if (results == null) {
			return "";
		} else {
			return results[1];
		}
	}
};