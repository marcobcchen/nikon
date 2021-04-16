$(function(){
  var nowPage = 0;
  var list = [];
  var pageLength = Math.ceil(newsList.length / 10);

  function init(){
    for(var i=0; i<pageLength; i++){
      var start = i * 10;
      var end = i * 10 + 10;
      var page = newsList.slice(start, end);

      list[i] = page;
    }
    
    setPage(nowPage);

    $('.page-links .prev').on('click', function(){
      if(nowPage > 0){
        nowPage -= 1;
      }

      setPage(nowPage);

      return false;
    });

    $('.page-links .next').on('click', function(){
      if(nowPage != pageLength - 1){
        nowPage += 1;
      }

      setPage(nowPage);

      return false;
    });
  }
  init();

  function setPage(pageId){
    var data = list[pageId];
    $('.news-list').empty();

    // console.log(pageLength);
    if(pageId == 0 && pageLength <= 1){
      $('.page-links .prev').removeClass('active');
      $('.page-links .next').removeClass('active');
    } 
    if(pageId == 0 && pageLength > 1){
      $('.page-links .prev').removeClass('active');
      $('.page-links .next').addClass('active');
    } 
    if(pageId > 0 && pageId < pageLength){
      $('.page-links .prev').addClass('active');
      $('.page-links .next').addClass('active');
    } 
    if(pageId > 0 && pageId == pageLength-1){
      $('.page-links .prev').addClass('active');
      $('.page-links .next').removeClass('active');
    } 

    for(var i=0; i<data.length; i++){
      var item = `
      <div class="news-item">
        <a class="picture" href="${data[i].link}" target="${data[i].linkTarget}"><img class="img-responsive" src="${data[i].pictrue}"></a>
        <div class="detail">
          <p class="date">${data[i].date}</p>
          <p class="title">${data[i].title}</p>
          <p class="description">${data[i].description}</p>
        </div>
      </div>
      ` 
      $('.news-list').append(item);
    }
  }
});

