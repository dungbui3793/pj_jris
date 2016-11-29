$(document).ready(function(){
    $(".btn-next").click(function(){
        var curPage = $(".current-page").text();
        var page = 6;
        if(curPage==page) {
            return
        }
        if(curPage< page){
            curPage++;
            $(".current-page").text(curPage);
        }
        var num = $(".col-1-content").length;
        for (var i=0; i<num;i++){
            var txt= $(".col-1-content")[i].innerHTML;
            txt = Number(txt)+5;
            $(".col-1-content")[i].innerHTML= txt;
        }
        if(curPage==page) {
            $(".btn-next").addClass("disable")
        }
        if(curPage!=1){
            $(".btn-back").removeClass("disable");
        }
    });
    $(".btn-back").click(function(){
        var curPage = $(".current-page").text();
        var page = 6;
        if(curPage==1) {
            return
        }
        if(curPage>1){
            curPage=curPage-1;
            $(".current-page").text(curPage);
        }
        var num = $(".col-1-content").length;
        for (var i=0; i<num;i++){
            var txt= $(".col-1-content")[i].innerHTML;
            txt = Number(txt)-5;
            $(".col-1-content")[i].innerHTML= txt;
        }
        if(curPage==1) {
            $(".btn-back").addClass("disable");
        }
        if(curPage< page){
            $(".btn-next").removeClass("disable");
        }
    });
});
$(".sec-cont-4 p").dotdotdot();