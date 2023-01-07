$(function () {
    setTimeout(() => {
        $(".itutorial-drop").fadeOut();
    }, 1500);
    var n = -25;
    function slider() {
     if (n != 75) {
         n += 25;
         $("img").css({"right": n + "%"});
     }
     else{
         n = -25;
     }
    }
    setInterval(slider,2000);
    $(".menu-btn").click(function () {
     $(".mini-menu").toggle(500);
    });
    $(".body").click(function () {
     $(".mini-menu").hide(200);
    });
    $(".infinite-menu b").click(function () {
     $(".infinite-menu b").css({"background-color":"transparent", "color":"white"})
     $(this).css({"background-color":"white", "color":"#800040"});
     
    });
    $("#row-bmw").click(function () {
     $(".row-benz").fadeOut();
     $(".row-bmw").fadeIn();
     $(".row-toyota").fadeOut();
     $(".row-honda").fadeOut();
    });
    $("#row-benz").click(function () {
     $(".row-benz").fadeIn();
     $(".row-bmw").fadeOut();
     $(".row-toyota").fadeOut();
     $(".row-honda").fadeOut();
    });
    $("#row-toyota").click(function () {
     $(".row-benz").fadeOut();
     $(".row-bmw").fadeOut();
     $(".row-toyota").fadeIn();
     $(".row-honda").fadeOut();
    });
    $("#row-honda").click(function () {
     $(".row-benz").fadeOut();
     $(".row-bmw").fadeOut();
     $(".row-toyota").fadeOut();
     $(".row-honda").fadeIn();
    });
    /*
    var cross = -30;
    function move() {
        $(".motor img").css({"transform": "scale(1.1)"});
     if (cross != 120) {
         cross += 0.5;
         $(".motor img").css({"left": cross + "%"});
     }
     else{
         
         cross = -30;
         $(".motor img").css({"left": cross + "%"});
     }
    }
    setInterval(move, 10);

    var ns = 1;
    function move_scale() {
        
     if (ns != 2) {
         ns += 1;
         $(".motor img").css({"transform": "scale"+"(" + ns + ")" });
     }
     else{
         
         ns = 1;
         $(".motor img").css({"transform": "scale"+"(" + ns + ")" });
     }
    }
    setInterval(move_scale, 100);
    */
     
    var state = $(".col-link");
    var link = $("#col-link");
    var br = "<br/>";
    $("#col-link").css({"cursor":"pointer"});
    $(".infinite-col").append(state , link , br , br);
    $("#col-link").click(function () {
        alert("No Youtube channel has been linked with this website");    
    });
    /*$(".infinite-col img").attr("src", "images/carlogo2.png");*/
    window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    
    
    if (document.body.scrollTop >= 130 || document.documentElement.scrollTop > 130) {
        $(".line").css({"right":"0%"});
        $(".ltop").fadeIn();
        
    }
    
        
    
    else{
        $(".line").css({"right":"100%"});
        $(".ltop").fadeOut();
    }
    
    
}
 });