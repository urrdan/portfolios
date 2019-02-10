$(document).ready(function(){ 
    lst=['creator','programmer','coder','designer']
    var play=0
    setInterval(function(){
        $('#play').html(lst[play]).fadeIn(500).delay(800).fadeOut(500)
        play++
        if (play>3){play=0}
    },2000)
    console.log(play)
    
    /*$(window).scroll(function(){
        var scrolled=$(window).scrollTop()
        var screenheight=$(window).height()
        if(scrolled>(screenheight*0.9)){
            $('.fixedHiddenMenu').css('background','red').siblings('#menu').children('ul').css('background','red')

        }
        console.log(scrolled,screenheight)
    })*/
})
    console.log('hello')