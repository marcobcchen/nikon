var cityId = 0;
var shopId = 0;

$(function(){
  function init(){
    for(var i=0; i<cityList.length; i++){
      // var option = '<option value="' + cityList[i].id + '">' + cityList[i].city +'</option>';
      var option = `<option value="${cityList[i].id}">${cityList[i].city}</option>`;
      $('.city').append(option);
    }

    $('.city').on('change', function(e){
      cityId = e.target.value;
      shopId = 0;
      setShopList();

      getShopInfo(cityId, shopId);
    });

    $('.shop').on('change', function(e){
      shopId = e.target.value;
      getShopInfo(cityId, shopId);
    });

    $('.shop-close').on('click', function(){
      $('.shop-container').fadeOut();

      return false;
    });

    // set();
    setShopList();
  }

  function setShopList(){
    for(var i=0; i<shopList.length; i++){
      if(cityId == shopList[i].id){
        var shopDetail = shopList[i].shop;
        $('.shop').empty();

        for(var j=0; j<shopDetail.length; j++){
          // var option = '<option value="' + shopDetail[j].id + '">' + shopDetail[j].name +'</option>';
          var option = `<option value="${shopDetail[j].id}">${shopDetail[j].name}</option>`;
          $('.shop').append(option);
        }
      }
    }
  }
  init();

  function set(){
    var x, i, j, selElmnt, a, b, c;
    var input;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        // input.value = selElmnt.options[selElmnt.selectedIndex].innerHTML;

        document.getElementById("mytext").value = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        
        console.log(selElmnt.options[selElmnt.selectedIndex].innerHTML);

        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (j = 0; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                    y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    // console.log('i:', i);
                    break;
                }
                }
                h.click();
            });
            b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
  }
});

function getShopInfo(city, shop){
  // console.log('change: ', city, shop);
  
  for(var i=0; i<shopList.length; i++){
    if(cityId == shopList[i].id){
      var shopDetail = shopList[i].shop;

      for(var j=0; j<shopDetail.length; j++){
        if(shopId == shopDetail[j].id){
          var pos = shopDetail[j].position;

          $('.carousel-indicators').empty();
          $('.carousel-inner').empty();

          if(shopDetail[j].photos.length > 0){
            $('.shop-container .img').show();
            
            for(var k=0; k<shopDetail[j].photos.length; k++){
              var photos;
              var dots;
  
              if(k == 0){
                dots = `<li data-target="#carousel-example-generic" data-slide-to="${k}" class="active"></li>`;
                photos = `<div class="item active"><img class="img-responsive" src="images/access/shop/${shopDetail[j].photos[k]}"></div>`;
              }else{
                dots = `<li data-target="#carousel-example-generic" data-slide-to="${k}"></li>`;
                photos = `<div class="item"><img class="img-responsive" src="images/access/shop/${shopDetail[j].photos[k]}"></div>`;
              }
  
              $('.carousel-indicators').append(dots);
              $('.carousel-inner').append(photos);
            }
          }else{
            $('.shop-container .img').hide();
          }
          

          $('.shop-container .name span').html(shopDetail[j].name);
          $('.shop-container .address span').html(shopDetail[j].address);
          $('.shop-container .phone span').html(shopDetail[j].phone);
          $('.shop-container .time span').html(shopDetail[j].time);
          if(shopDetail[j].link){
            $('.shop-container .link').show();
            $('.shop-container .link a').html(shopDetail[j].link);
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
          moveToLocation(pos);
        }
      }
    }
  }
}

// 初始化地圖
var uluru = {lat: 25.063519, lng: 121.545966};
var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: mapStyle
    });

    var position = new google.maps.LatLng(uluru);
    addMarker(position);
    getShopInfo(cityId, shopId);
}

function addMarker(pos) {
    clearMarkers();

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
  var center = new google.maps.LatLng(pos.lat, pos.lng); 
  map.panTo(center); 
  addMarker(pos);
} 