var cityId = 0;
var shopId = 0;
var isFirst = true;
var nowCity = cityList[0].city;
var nowShop = shopList[0].shop[0].name;

$(function(){
  function init(){

    $('.shop-close').on('click', function(){
      $('.shop-container').fadeOut();
      return false;
    });

    setList();
  }

  
  init();
});

function setList(){
  setCityOption();
  setShopOption();
  // setCustomFake();
}

function setCityOption(){
  var cityOption = '';

  for(var i=0; i<cityList.length; i++){
    cityOption += `<option value="${cityList[i].id}">${cityList[i].city}</option>`;
  }

  var customCity = `
  <div class="custom-city custom-select">
    <select class="city">${cityOption}</select>
  </div>
  `

  $('.controller').prepend(customCity);

  setCustomCity();
}

function setShopOption(){
  var shopOption = '';

  for(var i=0; i<shopList.length; i++){
    if(cityId == shopList[i].id){
      var shopDetail = shopList[i].shop;

      for(var j=0; j<shopDetail.length; j++){
        shopOption += `<option value="${shopDetail[j].id}">${shopDetail[j].name}</option>`;
      }
    }
  }

  var customShop = `
  <div class="custom-shop custom-select">
    <select class="shop">${shopOption}</select>
  </div>
  `;

  $('.controller').append(customShop);

  setCustomShop();
}

function setCustomCity(){
  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-city");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }

  if(nowCity != $('.custom-city .select-selected').text()){
    nowCity = $('.custom-city .select-selected').text();

    for(var i=0; i<cityList.length; i++){
      if(cityList[i].city == nowCity){
        cityId = cityList[i].id;

        $('.custom-fake').remove();
        $('.custom-shop').remove();
        setShopOption();
      }
    }
    // console.log('change', nowCity, cityId);
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
}

function setCustomShop(){
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-shop");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  
  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  
    if(nowShop != $('.custom-shop .select-selected').text()){
      nowShop = $('.custom-shop .select-selected').text();
  
      for(var i=0; i<cityList.length; i++){
        if(cityList[i].city == nowCity){
  
          for(var j=0; j<shopList[i].shop.length; j++){
            if(shopList[i].shop[j].name == nowShop){
              shopId = shopList[i].shop[j].id;
            }
          }
        }
      }
  
      getShopInfo(cityId, shopId);
      console.log('change2', cityId, shopId);
    }
  }
  
  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
}

function setCustomFake(){
  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-fake");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
}

function getShopInfo(cityId, shopId){
  if(shopId == 0) return;
  console.log('change: ', cityId, shopId);
  
  for(var i=0; i<shopList.length; i++){
    if(cityId == shopList[i].id){
      var shopDetail = shopList[i].shop;

      for(var j=0; j<shopDetail.length; j++){
        console.log('shop num: ', shopDetail.length);
        if(shopId == shopDetail[j].id){
          var pos = shopDetail[j].position;
          moveToLocation(pos);

          $('.mask-scroll').animate({scrollTop: 0}, 500);
          $('.shop-container .img').empty();

          if(shopDetail[j].photos.length > 0){
            var dots = '';
            var photos = '';

            for(var k=0; k<shopDetail[j].photos.length; k++){
              dots += `<li data-target="#carousel-example-generic" data-slide-to="${k}" ${k == 0 ? 'class="active"' : ''}></li>`;
              photos += `<div class="item ${k == 0 ? 'active' : ''}"><img class="img-responsive" src="${shopDetail[j].photos[k]}"></div>`;
            }
            // console.log(dots, photos);

            var carousel = `
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">${photos}</div>
            </div>
            `;

            // var carousel = `
            // <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            //   <ol class="carousel-indicators">${dots}</ol>
            
            //   <div class="carousel-inner" role="listbox">${photos}</div>

            //   <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            //     <span class="icon-left" aria-hidden="true"></span>
            //     <span class="sr-only">Previous</span>
            //   </a>
            //   <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            //     <span class="icon-right" aria-hidden="true"></span>
            //     <span class="sr-only">Next</span>
            //   </a>
            // </div>
            // `;

            $('.shop-container .img').append(carousel);
          }else{
            $('.shop-container .img').empty();
          }
          
          $('.shop-container .name span').html(shopDetail[j].name);
          $('.shop-container .address span').html(shopDetail[j].address);
          $('.shop-container .phone span').html(shopDetail[j].phone);
          $('.shop-container .time span').html(shopDetail[j].time);
          if(shopDetail[j].link){
            $('.shop-container .link').show();
            // $('.shop-container .link a').html(shopDetail[j].link);
            $('.shop-container .link a').attr('href', shopDetail[j].link);
          }else{
            $('.shop-container .link').hide();
          }
          if(shopDetail[j].intro){
            $('.shop-container .intro-title').show();
            $('.shop-container .intro').show();
            $('.shop-container .intro').html(shopDetail[j].intro);
          }else{
            $('.shop-container .intro-title').hide();
            $('.shop-container .intro').hide();
          }
        }
      }
    }
  }

  $('.carousel').carousel();
}


// 初始化地圖
var uluru = {lat: 23.5294867043461, lng: 121.07084805212911};
var map;
var markers = [];
var bounds;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7.5,
        center: uluru,
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: mapStyle
    });

    bounds = new google.maps.LatLngBounds();
    var position = new google.maps.LatLng(uluru);
    // addMarker(position);
    getShopInfo(cityId, shopId);
}

function addMarker(pos) {
    clearMarkers();

    var loc = new google.maps.LatLng(pos.lat, pos.lng);

    var icon = {
      url: "images/global/icon_map.png",
      scaledSize: new google.maps.Size(50, 50), 
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(25, 25)
    };

    marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: icon,
    });

    marker.addListener("click", () => {
      $('.shop-container').fadeIn();
    });

    markers.push(marker);

    bounds.extend(loc);
}

function clearMarkers(){
  setMapOnAll(null);
  markers = [];
}

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function moveToLocation(pos){ 
  addMarker(pos);

  var center = new google.maps.LatLng(pos.lat, pos.lng); 
  map.panTo(center); 
  map.setZoom(15);

  // map.fitBounds(bounds);
  // map.panToBounds(bounds); 
  // addMarker(pos);

  // if(isFirst){
  //   isFirst = false;
  //   return
  // }
 
  $('.shop-container').fadeIn();
} 

