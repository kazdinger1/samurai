var stranica = 0;

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

function funkcija() {
    document.getElementById("iceage").style.opacity=1;
    document.getElementById("stoneage").style.opacity=0;
    document.getElementById("bronzeage").style.opacity=0;
    document.getElementById("ironage").style.opacity=0;
    document.getElementById("vikingage").style.opacity=0;

    document.getElementById("iceage1").style.opacity=1;
    document.getElementById("stoneage1").style.opacity=0.4;
    document.getElementById("bronzeage1").style.opacity=0.4;
    document.getElementById("ironage1").style.opacity=0.4;
    document.getElementById("vikingage1").style.opacity=0.4;
    stranica = 0;
}

function funkcija1() {
    document.getElementById("iceage").style.opacity=0;
    document.getElementById("stoneage").style.opacity=1;
    document.getElementById("bronzeage").style.opacity=0;
    document.getElementById("ironage").style.opacity=0;
    document.getElementById("vikingage").style.opacity=0;
    
    document.getElementById("iceage1").style.opacity=0.4;
    document.getElementById("stoneage1").style.opacity=1;
    document.getElementById("bronzeage1").style.opacity=0.4;
    document.getElementById("ironage1").style.opacity=0.4;
    document.getElementById("vikingage1").style.opacity=0.4;
    stranica = 1;
}

function funkcija2() {
    document.getElementById("iceage").style.opacity=0;
    document.getElementById("stoneage").style.opacity=0;
    document.getElementById("bronzeage").style.opacity=1;
    document.getElementById("ironage").style.opacity=0;
    document.getElementById("vikingage").style.opacity=0;

    document.getElementById("iceage1").style.opacity=0.4;
    document.getElementById("stoneage1").style.opacity=0.4;
    document.getElementById("bronzeage1").style.opacity=1;
    document.getElementById("ironage1").style.opacity=0.4;
    document.getElementById("vikingage1").style.opacity=0.4;
    stranica = 2;
}

function funkcija3() {
    document.getElementById("iceage").style.opacity=0;
    document.getElementById("stoneage").style.opacity=0;
    document.getElementById("bronzeage").style.opacity=0;
    document.getElementById("ironage").style.opacity=1;
    document.getElementById("vikingage").style.opacity=0;

    document.getElementById("iceage1").style.opacity=0.4;
    document.getElementById("stoneage1").style.opacity=0.4;
    document.getElementById("bronzeage1").style.opacity=0.4;
    document.getElementById("ironage1").style.opacity=1;
    document.getElementById("vikingage1").style.opacity=0.4;
    stranica = 3;
}

function funkcija4() {
    document.getElementById("iceage").style.opacity=0;
    document.getElementById("stoneage").style.opacity=0;
    document.getElementById("bronzeage").style.opacity=0;
    document.getElementById("ironage").style.opacity=0;
    document.getElementById("vikingage").style.opacity=1;

    document.getElementById("iceage1").style.opacity=0.4;
    document.getElementById("stoneage1").style.opacity=0.4;
    document.getElementById("bronzeage1").style.opacity=0.4;
    document.getElementById("ironage1").style.opacity=0.4;
    document.getElementById("vikingage1").style.opacity=1;
    stranica = 4;
}

function funkcijaStreliceLevo() {
    if(stranica==1) {
        document.getElementById("iceage").style.opacity=1;
        document.getElementById("stoneage").style.opacity=0;
        document.getElementById("bronzeage").style.opacity=0;
        document.getElementById("ironage").style.opacity=0;
        document.getElementById("vikingage").style.opacity=0;

            
        document.getElementById("iceage1").style.opacity=1;
        document.getElementById("stoneage1").style.opacity=0.4;
        document.getElementById("bronzeage1").style.opacity=0.4;
        document.getElementById("ironage1").style.opacity=0.4;
        document.getElementById("vikingage1").style.opacity=0.4;
        stranica = 0;
    }
    if(stranica==2) {
        document.getElementById("iceage").style.opacity=0;
        document.getElementById("stoneage").style.opacity=1;
        document.getElementById("bronzeage").style.opacity=0;
        document.getElementById("ironage").style.opacity=0;
        document.getElementById("vikingage").style.opacity=0;
    
        document.getElementById("iceage1").style.opacity=0.4;
        document.getElementById("stoneage1").style.opacity=1;
        document.getElementById("bronzeage1").style.opacity=0.4;
        document.getElementById("ironage1").style.opacity=0.4;
        document.getElementById("vikingage1").style.opacity=0.4;
        stranica = 1;
    }
    if(stranica==3) {
        document.getElementById("iceage").style.opacity=0;
        document.getElementById("stoneage").style.opacity=0;
        document.getElementById("bronzeage").style.opacity=1;
        document.getElementById("ironage").style.opacity=0;
        document.getElementById("vikingage").style.opacity=0;

        document.getElementById("iceage1").style.opacity=0.4;
        document.getElementById("stoneage1").style.opacity=0.4;
        document.getElementById("bronzeage1").style.opacity=1;
        document.getElementById("ironage1").style.opacity=0.4;
        document.getElementById("vikingage1").style.opacity=0.4;
        stranica = 2;
    }
    if(stranica==4) {
        document.getElementById("iceage").style.opacity=0;
        document.getElementById("stoneage").style.opacity=0;
        document.getElementById("bronzeage").style.opacity=0;
        document.getElementById("ironage").style.opacity=1;
        document.getElementById("vikingage").style.opacity=0;

        document.getElementById("iceage1").style.opacity=0.4;
        document.getElementById("stoneage1").style.opacity=0.4;
        document.getElementById("bronzeage1").style.opacity=0.4;
        document.getElementById("ironage1").style.opacity=1;
        document.getElementById("vikingage1").style.opacity=0.4;
        stranica = 3;
    }







}

function funkcijaStreliceDesno() {
    if(stranica==3) {
        document.getElementById("iceage").style.opacity=0;
        document.getElementById("stoneage").style.opacity=0;
        document.getElementById("bronzeage").style.opacity=0;
        document.getElementById("ironage").style.opacity=0;
        document.getElementById("vikingage").style.opacity=1;

        document.getElementById("iceage1").style.opacity=0.4;
        document.getElementById("stoneage1").style.opacity=0.4;
        document.getElementById("bronzeage1").style.opacity=0.4;
        document.getElementById("ironage1").style.opacity=0.4;
        document.getElementById("vikingage1").style.opacity=1;
        stranica = 4;
    }
    if(stranica==2) {
        document.getElementById("iceage").style.opacity=0;
        document.getElementById("stoneage").style.opacity=0;
        document.getElementById("bronzeage").style.opacity=0;
        document.getElementById("ironage").style.opacity=1;
        document.getElementById("vikingage").style.opacity=0;

        document.getElementById("iceage1").style.opacity=0.4;
        document.getElementById("stoneage1").style.opacity=0.4;
        document.getElementById("bronzeage1").style.opacity=0.4;
        document.getElementById("ironage1").style.opacity=1;
        document.getElementById("vikingage1").style.opacity=0.4;
        stranica = 3;
    }
    if(stranica==1) {
        document.getElementById("iceage").style.opacity=0;
        document.getElementById("stoneage").style.opacity=0;
        document.getElementById("bronzeage").style.opacity=1;
        document.getElementById("ironage").style.opacity=0;
        document.getElementById("vikingage").style.opacity=0;

        document.getElementById("iceage1").style.opacity=0.4;
        document.getElementById("stoneage1").style.opacity=0.4;
        document.getElementById("bronzeage1").style.opacity=1;
        document.getElementById("ironage1").style.opacity=0.4;
        document.getElementById("vikingage1").style.opacity=0.4;
        stranica = 2;
    }
    if(stranica==0) {
        document.getElementById("iceage").style.opacity=0;
        document.getElementById("stoneage").style.opacity=1;
        document.getElementById("bronzeage").style.opacity=0;
        document.getElementById("ironage").style.opacity=0;
        document.getElementById("vikingage").style.opacity=0;

        document.getElementById("iceage1").style.opacity=0.4;
        document.getElementById("stoneage1").style.opacity=1;
        document.getElementById("bronzeage1").style.opacity=0.4;
        document.getElementById("ironage1").style.opacity=0.4;
        document.getElementById("vikingage1").style.opacity=0.4;
        stranica = 1;
    }
}