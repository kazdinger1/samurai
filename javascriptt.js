jQuery(document).scroll(function () {
    var y = jQuery(this).scrollTop();
    if (y > 1700) {
        jQuery('.banner').fadeIn();
        jQuery('.banner2').fadeIn();
        jQuery('.banner3').fadeIn();
    } else {
        jQuery('.banner').fadeOut();
        jQuery('.banner2').fadeOut();
        jQuery('.banner3').fadeOut();
    }
    
    // if (y > 950) {
    //     jQuery('.third').fadeIn();
    // } else {
    //     jQuery('.third').fadeOut();
    // }
});


// function mojaFunkcija() {
//     document.getElementById('third_nar_slice2').style.opacity = "1";
// }

function popUpFunkcijaJustice() {
    document.getElementById("myPopup").classList.toggle("show");
    document.getElementById("overlay").classList.toggle("show");
}
function popUpFunkcijaCourage() {
    document.getElementById("myPopup3").classList.toggle("show");
    document.getElementById("overlay3").classList.toggle("show");
}
function popUpFunkcijaMercy() {
    document.getElementById("myPopup7").classList.toggle("show");
    document.getElementById("overlay7").classList.toggle("show");
}
function popUpFunkcijaRespect() {
    document.getElementById("myPopup8").classList.toggle("show");
    document.getElementById("overlay8").classList.toggle("show");
}
function popUpFunkcijaLoyalty() {
    document.getElementById("myPopup4").classList.toggle("show");
    document.getElementById("overlay4").classList.toggle("show");
}
function popUpFunkcijaHonor() {
    document.getElementById("myPopup5").classList.toggle("show");
    document.getElementById("overlay5").classList.toggle("show");
}
function popUpFunkcijaHonesty() {
    document.getElementById("myPopup6").classList.toggle("show");
    document.getElementById("overlay6").classList.toggle("show");
}
function popUpFunkcijaSelfControl() {
    document.getElementById("myPopup1").classList.toggle("show");
    document.getElementById("overlay1").classList.toggle("show");
}

jQuery(document).scroll(function () {
    var y = jQuery(this).scrollTop();
    // if(y>0 && y<10) jQuery('.first_image').animate({right: '100%'});
    if (y > 250) {
        jQuery('.first_text').animate({right: '110%'});
        jQuery('.first_image').animate({bottom: '80%'});
    }
    if (y > 650) {
    jQuery('.image2_text2').animate({right: '94%'});
    }
    if (y > 1050) {
        jQuery('.second_text').animate({right: '100%'});
        }
});

