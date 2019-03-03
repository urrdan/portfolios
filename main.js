$(document).ready(function(){ 
    lst=['creator','programmer','coder','designer']
    var play=0
    setInterval(function(){
        $('#play').html(lst[play]).fadeIn(500).delay(800).fadeOut(500)
        play++
        if (play>3){play=0}
    },2000)
    
    $('.menu-icon').click(function(){
        $('#hidden-menu').toggleClass('show-menu hidden-menu')
        $('.fas').toggleClass('fa-times')
        $('.menu-bar').toggleClass('visible')
        
        
    })
    
    $(window).scroll(function(){
        if($(window).scrollTop()<$(window).height()){
            $('.menu-bar').css('display','none')
        }else{
            $('.menu-bar').css('display','initial')
        }
        //find away to improve the code below i.e to shorten it
        //code for hidding menu when scrolling
        $('#hidden-menu').removeClass('show-menu').addClass('hidden-menu')
        $('.menu-bar').addClass('visible')
        $('.fas').removeClass('fa-times').addClass('fa-bars')
        
    })
})