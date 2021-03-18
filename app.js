let flag  = true;
let flag2 = true;
const getwidth = function(){
    const width = $(window).width()
    return width;
}


$('#heading').click(function(event) {
    event.preventDefault();
    if(flag2){
        $('.main-show').css('left','100%')
        $('#signup').toggleClass('move')
        flag2=false;
    }else{
        $('.main-show').css('left','0')
        $('#signup').toggleClass('move')
        flag2 = !flag2;
    }
  
  });
$('.menu-icon').click(function(event){
     const width = getwidth();
     console.log(width)
     const listWidth = $('.list').width();
     const value = (listWidth/width)*100;
     console.log(value)
    if(flag){
        $('.list').css("left",`${100-value}%`)
        flag = false;
    }else{
        $('.list').css("left",'100%')
        flag = true;
    }
    // const value = width/listWidth;
    // $('.click').css("left",`${100-value}%`)
    $('.menu-icon').toggleClass('hover')
})
$('.registerbtn').click(function(event){
    event.preventDefault();
    if(flag2){
        $('.main-show').css('left','100%')
        $('#signup').toggleClass('move')
        flag2=false;
    }else{
        $('.main-show').css('left','0')
        $('#signup').toggleClass('move')
        flag2 = !flag2;
    }
})
