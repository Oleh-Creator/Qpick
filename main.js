let likes = 0;
$('.AirpodsHeart').attr('like', false);

$('.AirpodsHeart').click(function (e) {
    let like = $(this).attr('like');
    if (like == "false") {
        $(this).css('background-image', 'url("./img/airpodsHeard2.webp")');
        $(this).attr('like', true);
        likes++;
    } else {
        $(this).css('background-image', 'url("./img/airpodsHeard.webp")');
        $(this).attr('like', false);
        likes--;
    }
    $('.HeartCounter').text(likes);
});
$('.filterBtn').click(function () {
    $('.filterContainer').slideToggle(400);
});
$('.heartGroup').click(function () {
    $('.HeartItems').slideToggle(00001);
});
Exit.onclick=function(){
    HeartItems.style.display="none"
}
filterBtn.onclick=function(){
    filterContainer.style.display="flex"
}
$('.cases').click(function () {
    cartContainer
    showCard();
})
filterBtn.onclick=function(){
    filterContainer.style.display="flex";
}
cases.onclick=function(){
    airPods.style.display="none";
    airPods2.style.display="none";
    phoneCases.style.display="block";
}
earPhones.onclick=function(){
    phoneCases.style.display="none";
    airPods.style.display="block";
    airPods2.style.display="block";
}
let carts = 0;
$('.ButtonBy').click(function (e) {
    let cart = $(this).attr('cart');
    if (cart == "false") {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $(this).attr('cart', true);
        carts--;
    } else {
        $(this).css('background-color', 'greenyellow');
        $(this).css('color', 'black');
        $(this).attr('cart', false);
        carts++;
    }
    $('.CartCounter').text(carts);
});