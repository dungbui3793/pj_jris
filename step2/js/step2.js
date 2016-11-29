$(document).ready(function(){
    $(".submit-btn").click(function(){
        localStorage.clear();
        window.location.href = "../step3/index.html"
    });
    $(".small-btn-left").click(function(){
        window.location.href = "../step1/index.html"
    });
    var previousPage = document.referrer;
    if (previousPage.substring(previousPage.length-10,previousPage.length) != "index.html") {
        previousPage = previousPage + "index.html";
    }
    var page = previousPage.substring(previousPage.length-16,previousPage.length);
    if (page === "step1/index.html") {
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
        if (score1 == null || score2 == null || score3 == null || score4 == null || score5 == null ||
            score6 == null || comment1 == null || comment2 == null || comment3 == null ||
            comment4 == null || comment5 == null || comment6 == null || commentAll == null) {
            window.location.href = "../step1/index.html"
        } else {
            $('.score-1').text(score1);
            var realScore1 = ((score1*50)/100);
            $('.real-score-1').text(realScore1.toFixed(1));
            $('.score-2').text(score2);
            var realScore2 = ((score2*20)/100);
            $('.real-score-2').text(realScore2.toFixed(1));
            $('.score-3').text(score3);
            var realScore3 = ((score3*5)/100);
            $('.real-score-3').text(realScore3.toFixed(1));
            $('.score-4').text(score4);
            var realScore4 = ((score4*10)/100);
            $('.real-score-4').text(realScore4.toFixed(1));
            $('.score-5').text(score5);
            var realScore5 = ((score5*10)/100);
            $('.real-score-5').text(realScore5.toFixed(1));
            $('.score-6').text(score6);
            var realScore6 = ((score6*5)/100);
            $('.real-score-6').text(realScore6.toFixed(1));
            var finalScore = ((realScore1) + (realScore2) + (realScore3) + (realScore4) + (realScore5) + (realScore6)).toFixed(1)
            $('.final-score').text(finalScore);
            $('.comment-1').text(comment1);
            $('.comment-2').text(comment2);
            $('.comment-3').text(comment3);
            $('.comment-4').text(comment4);
            $('.comment-5').text(comment5);
            $('.comment-6').text(comment6);
            $('.comment-all').text(commentAll);
        }
    } else {
        localStorage.clear();
        window.location.href = "../step1/index.html"
    }
});

