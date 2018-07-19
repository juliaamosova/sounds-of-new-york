$(document).ready(function() {

    /* Hide 'volume on' icon be default when the app is loaded */
    $("#on_1").hide();
    $("#on_2").hide();
    $("#on_3").hide();
    $("#on_4").hide();
    $("#on_5").hide();
    $("#on_6").hide();
    $("#on_7").hide();
    $("#on_8").hide();
    $("#on_9").hide();
    $("#on_10").hide();
    $("#on_11").hide();
    $("#on_12").hide();
    $("#on_big").hide();


    /* Load audio file when app is loaded but don't play be default */
    var sound = document.createElement("audio");
    sound.volume = 0.4;
    sound.autoPlay = false;
    sound.preLoad = true;
    sound.loop = true;
    sound.controls = true;

    /* Play the audio when 'volume off' icon is clicked + show 'volume on' icon instead */
    $(function(){
        $(".volume_swap").on('click', function() {

            var sound_id = $(this).attr('id');
            sound.src = document.getElementById(sound_id).getAttribute("data-value");

            if ($(this).attr("class") === "volume_swap") {
                this.src = this.src.replace("volume_off_red.png","volume_on_red.png");
                sound.play();
            } else {
                this.src = this.src.replace("volume_on_red.png","volume_off_red.png");
                sound.pause();
            }
            $(this).toggleClass("on");
        });
    });

    /* Open big image covering the entire page when clicked on the small image on the main page */
    $(".main_image").click(function(){

        var parent_container = $(this).parent();
        var dynamic_location = parent_container.find("p").html();

        $("#img_big").attr("src", this.src);
        $("#overlay").show();
        $("#overlay_content").show();
        $("#overlay_content p").append(dynamic_location).addClass("location_big");
    });

    /* Hide big image once clicked on it and show the main page with small images instead */
    $("#img_big").click(function(){
        $("#img_big").attr("src", "");
        $("#overlay").hide();
        $("#overlay_content").hide();
        $("#overlay_content p").empty();
    });

    /* Open About page */
    $("#about_menu").click(function(){
        $("#about").show();
        $("#about_content").show();
    });

    /* Close About page */
    $(".close_about").click(function(){
        $("#about").hide();
        $("#about_content").hide();
        window.history.go(-1);
    });

    /* Open Contact page */
    $("#contact_menu").click(function(){
        $("#contact").show();
        $("#contact_content").show();
    });

    /* Close Contact page */
    $(".close_contact").click(function(){
        $("#contact").hide();
        $("#contact_content").hide();
        window.history.go(-1);
    });

    /* Reloading Home Page when clicking on the "Sounds of New York" heading */
    $("#sounds_header").click(function () {
        location.reload(true);
    })

});

/* Toggle between adding and removing the "responsive" class to top_nav when the user clicks on the Menu icon on smaller screens */
function responsiveMenuToggle() {
    var x = document.getElementById("myTopNav");
    if (x.className === "top_nav") {
        x.className += " responsive";
    } else {
        x.className = "top_nav";
    }
}