
jQuery(document).scroll(function () {
    var y = jQuery(this).scrollTop();
    // if(y>0 && y<10) jQuery('.first_image').animate({right: '100%'});
    if (y>=122) {
        document.getElementById('navbar1').style.visibility = "visible";
    }
    else {
        document.getElementById('navbar1').style.visibility = "hidden";
    }
});

function vikingShow() {
    var x = document.getElementById('second_img_popUp');

    x.style.display = x.style.display == "block"? "none": "block";
    
    if(document.getElementById('second_img_popUp').style.pointerEvents = "none")
    document.getElementById('second_img_popUp').style.pointerEvents = "auto";
    else document.getElementById('second_img_popUp').style.pointerEvents = "none";
}
function vikingShow2() {
    var x = document.getElementById('second_img_popUp2');
    if(x.style.display == "block")
    x.style.display = "none";
    else x.style.display = "block";
    
    if(document.getElementById('second_img_popUp2').style.pointerEvents = "none")
    document.getElementById('second_img_popUp2').style.pointerEvents = "auto";
    else document.getElementById('second_img_popUp2').style.pointerEvents = "none";
}