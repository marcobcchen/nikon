$(function(){
  // $('.carousel').carousel({
  //   interval: 5000,
  //   pause: 'null'
  // })
  var data = newsList;

  function setNews(){
    var dots = '';
    var items = '';
    
    $('.news-list').empty();
    $('.news-carousel').empty();

    // 只取前三筆
    for(var i=0; i<3; i++){
      var item = `
      <div class="news-item">
        <div class="picture"><img class="img-responsive" src="${data[i].pictrue}"></div>
        <div class="detail">
          <p class="date">${data[i].date}</p>
          <p class="title">${data[i].title}</p>
          <p class="description">${data[i].description}</p>
        </div>
      </div>
      `;
      $('.news-list').append(item);
      
      dots += `<li data-target="#carousel-1" data-slide-to="${i}" class="${i == 0 ? 'active' : ''}"></li>`;
      items += `
        <div class="item ${i == 0 ? 'active' : ''}">
          <div class="news-item">
            <div class="picture"><img class="img-responsive" src="${data[i].pictrue}"></div>
            <div class="detail">
              <p class="date">${data[i].date}</p>
              <p class="title">${data[i].title}</p>
              <p class="description">${data[i].description}</p>
            </div>
          </div>
        </div>
      `;
    }

    var carousel = `
      <div id="carousel-1" class="visible-xs visible-sm carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          ${dots}
        </ol>
        <div class="carousel-inner" role="listbox">
          ${items}
        </div>
      </div>
    `;
    $('.news-carousel').append(carousel);
  }
  setNews();

  var myElement1 = document.querySelector('#carousel-1');
  var hammertime1 = new Hammer(myElement1);

  hammertime1.on('swipeleft', function(ev) {
    $('#carousel-1').carousel('next');
  });

  hammertime1.on('swiperight', function(ev) {
    $('#carousel-1').carousel('prev');
  });

  var myElement2 = document.querySelector('#carousel-2');
  var hammertime2 = new Hammer(myElement2);

  hammertime2.on('swipeleft', function(ev) {
    $('#carousel-2').carousel('next');
  });

  hammertime2.on('swiperight', function(ev) {
    $('#carousel-2').carousel('prev');
  });
});