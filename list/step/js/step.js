$(window).ready(function() {

    var $get_max = Math.max($(".table-1 .table-1__row-01 .table-1__row--02").height()-10,$(".table-1 .table-1__row-02 .table-1__row--02 a").height()-10);
    //console.log($get_max);
    $(".table-1 .table-1__row .table-1__row--02").height($get_max);

    $(".table-1 .table-1__row .table-1__row--02 > *").each(function() {
        if($(this).height() < $get_max) {
            $(this).css("line-height",$get_max+"px");
        }
    });

    $( ".score-slider" ).slider({
        range: "min",
        value: 0.0,
        min: 0,
        max: 5,
        step: 0.1
    });
    $(".footer__btn--submit.btn-step-01").click(function() {
        var score1 = $("#txt-score-1").text();
        var score2 = $("#txt-score-2").text();
        var score3 = $("#txt-score-3").text();
        var score4 = $("#txt-score-4").text();
        var score5 = $("#txt-score-5").text();
        var score6 = $("#txt-score-6").text();
        var comment1 = $(".txt-1").val();
        var comment2 = $(".txt-2").val();
        var comment3 = $(".txt-3").val();
        var comment4 = $(".txt-4").val();
        var comment5 = $(".txt-5").val();
        var comment6 = $(".txt-6").val();
        var commentAll = $(".txt-comment").val();

        if(commentAll == "") {
            $('.alert-7').addClass('active');
            $('.alert-table').addClass('active');
        } else {
            $(".step-01").fadeOut(300);
            $(".step-02").fadeIn(300);
            $(".step-wrap__01__footer .btn-step-02").css("display","inline-block");
            $(".step-wrap__01__footer .btn-step-01").css("display","none");

            $(".score-1").text(score1);
            $(".score-2").text(score2);
            $(".score-3").text(score3);
            $(".score-4").text(score4);
            $(".score-5").text(score5);
            $(".score-6").text(score6);
            $(".comment-1").text(comment1);
            $(".comment-2").text(comment2);
            $(".comment-3").text(comment3);
            $(".comment-4").text(comment4);
            $(".comment-5").text(comment5);
            $(".comment-6").text(comment6);
            $(".comment-all").text(commentAll);

            //count score
            var realScore1 = ((score1*50)/100);
            $('.real-score-1').text(realScore1.toFixed(1));
            var realScore2 = ((score2*20)/100);
            $('.real-score-2').text(realScore2.toFixed(1));
            var realScore3 = ((score3*5)/100);
            $('.real-score-3').text(realScore3.toFixed(1));
            var realScore4 = ((score4*10)/100);
            $('.real-score-4').text(realScore4.toFixed(1));
            var realScore5 = ((score5*10)/100);
            $('.real-score-5').text(realScore5.toFixed(1));
            var realScore6 = ((score6*5)/100);
            $('.real-score-6').text(realScore6.toFixed(1));
            var finalScore = ((realScore1) + (realScore2) + (realScore3) + (realScore4) + (realScore5) + (realScore6)).toFixed(1);
            $('.final-score').text(finalScore);
        }
    });

    // CLICK TO STEP 3
    $(".footer__btn--submit.btn-step-02").click(function() {
        $(".step-02").fadeOut(300);
        $(".step-03").fadeIn(300);
        $(".step-wrap__01__footer .btn-step-02").css("display","none");
        $(".footer__btn--submit.btn-step-03").css("display","inline-block");
    });

    //CLICK TO CLOSE
    $(".footer__btn--back.btn-step-01").click(function() {
        $(this).parents(".popup-info-wrap--pop").remove();
    });
    $(".footer__btn--submit.btn-step-03").click(function() {
       $(this).parents(".popup-info-wrap--pop").remove();
    });

    //CLICK BACK
    $(".footer__btn--back.btn-step-02").click(function() {
        $(".step-02").fadeOut(300);
        $(".step-01").fadeIn(300);
        $(".step-wrap__01__footer .btn-step-01").css("display","inline-block");
        $(".step-wrap__01__footer .btn-step-02").css("display","none");
    });

    $( "#score-1" ).on( "slide", function( event, ui ) {
        $( "#txt-score-1").text(ui.value.toFixed(1));
    } );
    $( "#score-2" ).on( "slide", function( event, ui ) {
        $( "#txt-score-2").text(ui.value.toFixed(1));
    } );
    $( "#score-3" ).on( "slide", function( event, ui ) {
        $( "#txt-score-3").text(ui.value.toFixed(1));
    } );
    $( "#score-4" ).on( "slide", function( event, ui ) {
        $( "#txt-score-4").text(ui.value.toFixed(1));
    } );
    $( "#score-5" ).on( "slide", function( event, ui ) {
        $( "#txt-score-5").text(ui.value.toFixed(1));
    } );
    $( "#score-6" ).on( "slide", function( event, ui ) {
        $( "#txt-score-6").text(ui.value.toFixed(1));
    } );

});