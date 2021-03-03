var newsList = [
  {
    pictrue: 'images/news/news_1.jpg',
    date: '2021.03.15',
    title: '網路預約，全新上線！',
    description: '為了避免您久候，除了使用電話預約，現在還可透過官方網站線上預約囉！請到<a href="access.html">搜尋店舖&預約</a>，找到您想要諮詢的眼鏡店，點選預約連結，立即<a href="contact.html">線上預約</a>。',
  },
  {
    pictrue: 'images/news/news_2.jpg',
    date: '2021.03.1',
    title: '「金馬設計師方序中」專訪影片： <br>如何從平凡中看到不凡',
    description: '在國內夙負盛名的視覺設計師 -「方序中」接受Nikon鏡片的專訪，談談他在金馬獎典禮的設計觀點，以及配戴Nikon鏡片的體驗感想，<a href="https://youtu.be/rNFuxzvJ2eY" target="_blank">點我看完整影片</a>。',
  },
  {
    pictrue: 'images/news/news_3.jpg',
    date: '2020.03.26',
    title: '「Nikon視光體驗中心再造附加價值」<br>今周刊報導',
    description: 'Nikon鏡片視光體驗中心，自2020年開始成立，正在用一種新型態的經營模式，開啟全新的配鏡體驗，這轉型之路是怎麼開始的呢？來看看<a href="https://www.businesstoday.com.tw/article/category/80393/post/202003240018/" target="_blank">今周刊</a>的詳盡報導。',
  },
];

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

    console.log(pageLength);
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
        <div class="picture"><img class="img-responsive" src="${data[i].pictrue}"></div>
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

