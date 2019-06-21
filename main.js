$(document).ready(function(){ 

    lst=['creator','programmer','coder','designer']
    var play=0
    setInterval(function(){
        $('#play').html(lst[play]).fadeIn(500).delay(800).fadeOut(500)
        play++
        if (play>3){play=0}
    },2000)
    
    $('.menu-icon').click(function(){
        $(this).toggleClass('fa-bars fa-times')
        $('.sidebar').toggleClass('sidebar-visible') 
    })
    $('.sidebar').click(function(){
        $('.menu-icon').removeClass('fa-times').addClass('fa-bars')
        $('.sidebar').removeClass('sidebar-visible') 
    })
    
    $(window).scroll(function(){
        if($(window).scrollTop()<$('.welcomePage').outerHeight()){
            $('.menu-bar').css('display','none')
            $('.sidebar-cont').css('opacity','0')
            console.log('lolo')
        }else{
            $('.menu-bar').css('display','initial')
            cloned=$('.welcomePage').children('.logoo,ul')
            $('.sidebar-cont').css({'opacity':'1'})
            if( $('.sidebar').children().length<2){
                $('.sidebar').append(cloned.clone())
            }
        }
        //find away to improve the code below i.e to shorten it
        //code for hidding menu when scrolling
        /* $('#hidden-menu').removeClass('show-menu').addClass('hidden-menu')
        $('.menu-bar').addClass('visible')
        $('.fas').removeClass('fa-times').addClass('fa-bars') */
        
    })
    
    $('.sidebar').height($(window).height())
})