$(document).ready(function(){
    localStorage.clear();
    $(".btn-next").click(function(){
        var curPage = $(".current-page").text();

        var data = '{"Page":6,"List": [{"No":"2016004" ,"Content":"NVAFにおける抗凝固薬（OAC）の変薬方法について","Name":"◯◯◯◯◯◯"},{"No":"2016005" ,"Content":"NVAFの診断の改善について","Name":"◯◯◯◯◯◯"},{"No":"2016006" ,"Content":"アピキサバン使用に関するReal world dataの解析について","Name":"◯◯◯◯◯◯"},{"No":"2016007" ,"Content":"その他の潜在的な領域について","Name":"◯◯◯◯◯◯"},{"No":"2016008" ,"Content":"□□□□□□□□□□□□□","Name":"◯◯◯◯◯◯"}]}';
        var json = JSON.parse(data);
        var tableContent = '<tr><th class="col2-1">研究 No.</th><th class="col2-2">研究タイトル</th><th class="col2-3">DR名</th><th class="col2-4"></th></tr>';
        var page = json.Page;
        if(curPage==page) {
            return
        }
        if(curPage< page){
            curPage++;
            $(".current-page").text(curPage);
        }
        for (var i = 0; i < 5; i++) {
            tableContent += '<tr><td><p class="col-1-content">'+json.List[i].No+curPage+'</p></td> '+
                '<td><a href="#" target="_blank" class="link"><p class="col-2-content">'+json.List[i].Content+curPage+'</p></a></td>' +
                '<td><p class="col-3-c">'+json.List[i].Name+curPage+'</p></td>' +
                '<td><a href="#" target="_blank"><div class="img-detail btn"><img src="images/detail.png"><p>詳細を見る</p></div></a></td>' +
                '</tr>';
        }
        $("#table-paging").empty();
        $("#table-paging")[0].innerHTML = tableContent;
        if(curPage==page) {
            $(".btn-next").addClass("disable")
        }
        if(curPage!=1){
            $(".btn-back").removeClass("disable");
        }
    });
    $(".btn-back").click(function(){
        var curPage = $(".current-page").text();
        if(curPage==1) {
            return
        }
        var data = '{"Page":6,"List": [{"No":"2016004" ,"Content":"NVAFにおける抗凝固薬（OAC）の変薬方法について","Name":"◯◯◯◯◯◯"},{"No":"2016005" ,"Content":"NVAFの診断の改善について","Name":"◯◯◯◯◯◯"},{"No":"2016006" ,"Content":"アピキサバン使用に関するReal world dataの解析について","Name":"◯◯◯◯◯◯"},{"No":"2016007" ,"Content":"その他の潜在的な領域について","Name":"◯◯◯◯◯◯"},{"No":"2016008" ,"Content":"□□□□□□□□□□□□□","Name":"◯◯◯◯◯◯"}]}';
        var json = JSON.parse(data);
        var tableContent = '<tr><th class="col2-1">研究 No.</th><th class="col2-2">研究タイトル</th><th class="col2-3">DR名</th><th class="col2-4"></th></tr>';
        var page = json.Page;
        if(curPage>1){
            curPage=curPage-1;
            $(".current-page").text(curPage);
        }
        for (var i = 0; i < 5; i++) {
            tableContent += '<tr><td><p class="col-1-content">'+json.List[i].No+curPage+'</p></td> '+
                '<td><a href="#" target="_blank" class="link"><p class="col-2-content">'+json.List[i].Content+curPage+'</p></a></td>' +
                '<td><p class="col-3-c">'+json.List[i].Name+curPage+'</p></td>' +
                '<td><a href="#" target="_blank"><div class="img-detail btn"><img src="images/detail.png"><p>詳細を見る</p></div></a></td>' +
                '</tr>';
        }
        $("#table-paging").empty();
        $("#table-paging")[0].innerHTML = tableContent;
        if(curPage==1) {
            $(".btn-back").addClass("disable");
        }
        if(curPage< page){
            $(".btn-next").removeClass("disable");
        }
    });

});
