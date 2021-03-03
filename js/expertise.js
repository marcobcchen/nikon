$(function(){
  var series = 1;

  $('.experience-nav a').on('click', function(){
    var _index = $(this).data('id');

    if(_index == series) return false;

    $('.experience-nav a').removeClass('active');
    $('.experience-nav a[data-id=' + _index + ']').addClass('active');
    $('.phase-' + series).css('display', 'none');
    $('.phase-' + _index).fadeIn();

    series = _index;

    return false;
  });

  $('.experience-item').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).find('.title').fadeIn();
      $(this).find('.detail').css('display', 'none');
    }else{
      $(this).addClass('active');
      $(this).find('.title').css('display', 'none');
      $(this).find('.detail').fadeIn();
    }
    
    return false;
  });
});