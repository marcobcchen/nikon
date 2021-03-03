//youtube player
var tt;

$(window).on("load", function () {
    tt = setInterval( getPlayStatus, 600 );
});

var player; 
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
        width : '1280',
        height : '720',
        videoId : 'txhFrDygSpU',
        playerVars: {rel: 0, showinfo: 0, ecver: 2},
        // events : {
        //     'onReady' : onPlayerReady,
        //     'onStateChange' : onPlayerStateChange
        // }
    });
}
    
function onPlayerReady(event) {
    //event.target.playVideo();

}
function onPlayerStateChange(event) {
    // if(event.data == YT.PlayerState.ENDED) {
    //     player.playVideo();
    // }
}

function getPlayStatus() {
    var status = player.getPlayerState();
    var names = {
        '-1' : '未開始',
        '0' : '結束',
        '1' : '播放中',
        '2' : '停止',
        '3' : '正在緩衝',
        '5' : '已載入影片'
    };
    var time = player.getCurrentTime(); // 目前播放時間
    var alltime = player.getDuration(); // 總時間
    if( time > 25){
        player.seekTo(0.01);
        // clearInterval(tt);
        // tt= 0;
        
        
    }
    // console.log(alltime);
};

