$(window).ready(function() {

    var $get_max = Math.max($(".table-1 .table-1__row-01 .table-1__row--02").height()-10,$(".table-1 .table-1__row-02 .table-1__row--02 a").height()-10);
    //console.log($get_max);
    $(".table-1 .table-1__row .table-1__row--02").height($get_max);

    $(".table-1 .table-1__row .table-1__row--02 > *").each(function() {
        if($(this).height() < $get_max) {
            $(this).css("line-height",$get_max+'px');
        }
    });

    $( ".score-slider" ).slider({
        range: "min",
        value: 0.0,
        min: 0,
        max: 5,
        step: 0.1
    });
    var score1 = localStorage.getItem("score-1");
    var score2 = localStorage.getItem("score-2");
    var score3 = localStorage.getItem("score-3");
    var score4 = localStorage.getItem("score-4");
    var score5 = localStorage.getItem("score-5");
    var score6 = localStorage.getItem("score-6");
    var comment1 = localStorage.getItem("comment-1");
    var comment2 = localStorage.getItem("comment-2");
    var comment3 = localStorage.getItem("comment-3");
    var comment4 = localStorage.getItem("comment-4");
    var comment5 = localStorage.getItem("comment-5");
    var comment6 = localStorage.getItem("comment-6");
    var commentAll = localStorage.getItem("comment-all");
    if (score1 != null && score2 != null && score3 != null && score4 != null && score5 != null &&
        score6 != null && comment1 != null && comment2 != null && comment3 != null &&
        comment4 != null && comment5 != null && comment6 != null  && commentAll != null) {
        $("#score-1").slider({value:score1});
        $( "#txt-score-1").text(score1);
        $("#score-2").slider({value:score2});
        $( "#txt-score-2").text(score2);
        $("#score-3").slider({value:score3});
        $( "#txt-score-3").text(score3);
        $("#score-4").slider({value:score4});
        $( "#txt-score-4").text(score4);
        $("#score-5").slider({value:score5});
        $( "#txt-score-5").text(score5);
        $("#score-6").slider({value:score6});
        $( "#txt-score-6").text(score6);
        $('.txt-1').val(comment1);
        $('.txt-2').val(comment2);
        $('.txt-3').val(comment3);
        $('.txt-4').val(comment4);
        $('.txt-5').val(comment5);
        $('.txt-6').val(comment6);
        $('.txt-comment').val(commentAll);
        localStorage.clear();
    }
    $(".submit-btn").click(function(){
        $('.alert-7').removeClass('active');
        $('.alert-table').removeClass('active');
        if ($('.txt-comment').val()=="") {
            $('.alert-7').addClass('active');
            $('.alert-table').addClass('active');
            return;
        }
        localStorage.setItem("score-1", $('#score-1').slider("option", "value"));
        localStorage.setItem("score-2", $('#score-2').slider("option", "value"));
        localStorage.setItem("score-3", $('#score-3').slider("option", "value"));
        localStorage.setItem("score-4", $('#score-4').slider("option", "value"));
        localStorage.setItem("score-5", $('#score-5').slider("option", "value"));
        localStorage.setItem("score-6", $('#score-6').slider("option", "value"));
        localStorage.setItem("comment-1", $('.txt-1').val());
        localStorage.setItem("comment-2", $('.txt-2').val());
        localStorage.setItem("comment-3", $('.txt-3').val());
        localStorage.setItem("comment-4", $('.txt-4').val());
        localStorage.setItem("comment-5", $('.txt-5').val());
        localStorage.setItem("comment-6", $('.txt-6').val());
        localStorage.setItem("comment-all", $('.txt-comment').val());
        var jumpTo = "../step2/index.html"
        if(ltie9()){
            var referLink = document.createElement('a');
            referLink.href = jumpTo;
            document.body.appendChild(referLink);
            referLink.click();
        }else{
            location.href = jumpTo;
        }
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