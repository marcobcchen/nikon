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
      
      dots += `<li data-target="#carousel-example-generic" data-slide-to="${i}" class="${i == 0 ? 'active' : ''}"></li>`;
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
      <div id="carousel-example-generic" class="visible-xs visible-sm carousel slide" data-ride="carousel" data-interval="false">
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
});