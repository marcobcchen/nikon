// 首頁、最新消息共用資料
// 首頁取前面三筆

var newsList = [
  {
    pictrue: 'images/news/news_7.jpg',
    date: '2021.01.18',
    title: '你的眼鏡配對了嗎?釐清你的用眼困擾<br>搜鏡王專題報導',
    description: '眼睛容易疲勞?!對光線敏感?車燈刺眼不舒服? 這些常見的用眼困擾能靠眼鏡改善嗎? 一起來看<a href="https://www.soeyewear.com/Article/Detail/3251?fbclid=IwAR0vNlSACtlVN4EJXYEGKoRAVscmEvBkO0C7g76dwBoPGb_ME2HTcIK-10Y" target="_blank">搜鏡王專題報導</a>',
    link: 'https://www.soeyewear.com/Article/Detail/3251?fbclid=IwAR0vNlSACtlVN4EJXYEGKoRAVscmEvBkO0C7g76dwBoPGb_ME2HTcIK-10Y',
    linkTarget: '_blank',
  },
  {
    pictrue: 'images/news/news_6.jpg',
    date: '2021.06.08',
    title: '「破解老花迷思，老花眼鏡怎麼配一篇就懂」<br>早安健康專訪',
    description: '不管您是擔心老花提早上門，還是遲遲不敢配戴老花眼鏡，這篇文章都會告訴您遇到老花該怎麼辦，以及選配老花眼鏡該注意什麼，<a href="https://www.edh.tw/article/27400" target="_blank">點閱看全文</a>。',
    link: 'https://www.edh.tw/article/27400',
    linkTarget: '_blank',
  },
  {
    pictrue: 'images/news/news_4.jpg',
    date: '2021.04.15',
    title: '「眼睛持續疲勞，老花提早報到？」<br>Heho健康網報導',
    description: '您也是眼睛容易疲勞的人嗎？你試著配了幾副眼鏡，但問題仍然無法獲得緩解？造成眼睛疲勞可能不僅一個因素，需要透過更精確、深入的量測流程才能找出適合的解決方案！<br><br>來看<a href="https://heho.com.tw/archives/168005" target="_blank">Heho健康網完整報導</a>。',
    link: 'https://heho.com.tw/archives/168005',
    linkTarget: '_blank',
  },
  {
    pictrue: 'images/news/news_5.jpg',
    date: '2021.06.08',
    title: '安心配鏡<br>官網預約送光學拭鏡紙',
    description: '凡於官網預約驗配，憑簡訊來店配鏡即享<br>Nikon光學拭鏡紙 一盒。<br><a href="news_sp2106.html">活動辦法></a><br>活動時間: 2021 /6/8~8/31',
    link: 'news_sp2106.html',
    linkTarget: '_self',
  },
  {
    pictrue: 'images/news/news_3.jpg',
    date: '2020.03.26',
    title: '「Nikon視光體驗中心再造附加價值」<br>今周刊報導',
    description: 'Nikon鏡片視光體驗中心，自2020年開始成立，正在用一種新型態的經營模式，開啟全新的配鏡體驗，這轉型之路是怎麼開始的呢？來看看<a href="https://www.businesstoday.com.tw/article/category/80393/post/202003240018/" target="_blank">今周刊</a>的詳盡報導。',
    link: 'https://www.businesstoday.com.tw/article/category/80393/post/202003240018/',
    linkTarget: '_blank',
  },
  {
    pictrue: 'images/news/news_2.jpg',
    date: '2021.03.1',
    title: '「金馬設計師方序中」專訪影片： <br>如何從平凡中看到不凡',
    description: '在國內夙負盛名的視覺設計師 -「方序中」接受Nikon鏡片的專訪，談談他在金馬獎典禮的設計觀點，以及配戴Nikon鏡片的體驗感想，<a href="https://youtu.be/rNFuxzvJ2eY" target="_blank">點我看完整影片</a>。',
    link: 'https://youtu.be/rNFuxzvJ2eY',
    linkTarget: '_blank',
  },
  {
    pictrue: 'images/news/news_1.jpg',
    date: '2021.03.15',
    title: '網路預約，全新上線！',
    description: '為了避免您久候，除了使用電話預約，現在還可透過官方網站線上預約囉！請到<a href="access.html">搜尋店舖&預約</a>，找到您想要諮詢的眼鏡店，點選預約連結，立即<a href="access.html">線上預約</a>。',
    link: 'access.html',
    linkTarget: '_self',
  },
];