$(document).ready(function(){ 

    //variables
    var breakpoint=760
    lst=['creator','programmer','coder','designer']
    var play=0

    //initial setting
    $('.text-hid').slideUp(0)
    $('.see-moreOrHide:last').fadeOut(0)
    small=$(window).outerWidth() < breakpoint


    setInterval(function(){
        $('#play').html(lst[play]).fadeIn(500).delay(800).fadeOut(500)
        play++
        if (play>3){play=0}
    },2000)

    $(window).resize(function(){
        //console.log('resixed')
        if(small=$(window).outerWidth() < breakpoint){
            //console.log('small')
            $('.sidebar').addClass('small')
            $('.small').slideUp(0) 
        }
        else{
            //console.log('big')
            $('.sidebar').removeClass('small')
            $('.sidebar').slideDown(0)
        }
    })

    if(small=$(window).outerWidth() < breakpoint){
        $('.sidebar').addClass('small')
        $('.small').slideUp(0) 
    }
    
    $('.menu-icon').click(function(){
        $(this).toggleClass('fa-bars fa-times')
        $('.small').slideToggle()
        console.log('menubar')
    })
    
    $('.small').click(function(){
        $('.menu-icon').removeClass('fa-times').addClass('fa-bars')
        $('.small').slideUp() 
    })

    $(window).scroll(function(){
        if($(window).scrollTop()<$('.welcomePage').outerHeight()){
            $('.menu-bar').css('display','none')
            $('.sidebar-cont').css('opacity','0')
        }else{
            $('.menu-bar').css('display','initial')
            cloned=$('.welcomePage').children('.logoo,ul')
            $('.sidebar-cont').css({'opacity':'1'})
            if( $('.sidebar').children().length<2){
                $('.sidebar').append(cloned.clone())
                $('.sidebar>ul').prepend("<li><a href='#welcomePage'>HOME</a></li>")
            }
        }
        
    })
    
    $('.see-moreOrHide').click(function(){
        $('.text-hid').slideToggle()
        $(this).fadeOut()
        $(this).siblings('.see-moreOrHide').fadeIn()
    })

    $('.sidebar').height($(window).height())
})