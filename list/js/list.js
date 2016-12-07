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
                '<td><p class="col-3-c col-3-content">'+json.List[i].Name+curPage+'</p></td>' +
                '<td><div class="img-detail btn popup-btn"><img src="images/detail.png"><p>詳細を見る</p></div></td>' +
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
                '<td><p class="col-3-c col-3-content">'+json.List[i].Name+curPage+'</p></td>' +
                '<td><div class="img-detail btn popup-btn"><img src="images/detail.png"><p>詳細を見る</p></div></td>' +
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


    var $get_popup_info = $(".popup-info-wrap .popup-info-wrap--pop");

    $get_popup_info.each(function() {
        var $this_popup_info = $(this);
        fix_margin($this_popup_info);

    });


    $(".popup-info__body__content").load("step/index.html");
    var arr = [];
    var $window_width = $(window).width();
    var count_max_popup = parseInt($window_width / 490);
    $(".detail-content").on('click','.popup-btn',function() {

        fix_window();

        var $get_this_click = $(this);//
        var get_number = guid();

        var data_array = {
            get_id: $(this).parents("tr").find(".col-1-content").text(),
            get_title: $(this).parents("tr").find(".col-2-content").text(),
            get_dr: $(this).parents("tr").find(".col-3-content").text(),
            get_budget: $(this).parents("tr").find(".col-4-content").text()
        };




        var $get_this_popup_data = $(".popup-info-wrap").find("#"+$get_this_click.attr("tag"));
        if($get_this_popup_data.length > 0) {
            $get_this_popup_data.addClass("popup--active");
            fix_margin($get_this_popup_data);
        } else {
            $get_this_click.attr("tag",get_number);
            var $body = $(".clone-item").clone().removeClass("clone-item").attr('id',get_number).prependTo(".popup-info-wrap");
            set_name($("#"+get_number).find(".table-1 .table-1__row .table-1__row--02"),$("#"+get_number).find(".table-1 .table-1__row-01 .table-1__row--02"),$("#"+get_number).find(".table-1 .table-1__row-02 .table-1__row--02"));


            arr.push($body.attr('id'));
            var lengthArr = arr.length;
            _.each(arr, function(_popupId, index) {
                if(index < (lengthArr - count_max_popup)) {
                    //$(arr[index]).css('display', 'none');
                    $('#' + _popupId).css('display', 'none');
                }
            });

            $body.find(".get-id").text(data_array.get_id);
            $body.find(".get-title").text(data_array.get_title);
            if(data_array.get_budget == "") {
                $body.find(".get-budget").text("¥1,000,000,000");
            } else {
                $body.find(".get-budget").text(data_array.get_budget);
            }
            $body.find(".get-dr").text(data_array.get_dr);

            $( ".score-slider" ).slider({
                range: "min",
                value: 0.0,
                min: 0,
                max: 5,
                step: 0.1
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
            //$body.find("#get-id").text("hello");
        }

    });

    var popup_info_wrap = $(".popup-info-wrap");
    popup_info_wrap.on('click','.click-close', function() {
        var $this_popup_info = $(this).parents(".popup-info-wrap--pop");
        $this_popup_info.remove();

        // Get array length
        var lengthArr = arr.length;

        // Show previous popup
        //console.log(arr[lengthArr - count_max_popup - 1]);
        var previousPopupId = arr[lengthArr - count_max_popup - 1];
        $('#' + previousPopupId).css('display', 'inline-block');

        // Get current popup Id
        var currentId = $this_popup_info.attr('id');

        // Remove current popup from array
        _.remove(arr, function(_id) {
            return _id == currentId;
        });

        // Rerender popup
        //_.each(arr, function(_popupId, index) {
        //    if(index < (lengthArr - count_max_popup)) {
        //        $('#' + _popupId).css('display', 'none');
        //    }
        //});
    });

    popup_info_wrap.on('click','.click-fix-size', function() {
        var $this_popup_info = $(this).parents(".popup-info-wrap--pop");
        if($this_popup_info.hasClass("popup-expand-active")) {
            $this_popup_info.removeClass("popup-expand-active popup--active");
        }
        else {
            $this_popup_info.toggleClass("popup--active");
            fix_margin($this_popup_info);
        }
    });

    popup_info_wrap.on('click','.click-expand', function() {
        var  $this_get_popup_info = $(this).parents(".popup-info-wrap");
        var $get_child = $this_get_popup_info.find(".popup-info-wrap--pop");

        var $this_popup_info = $(this).parents(".popup-info-wrap--pop");
        $this_popup_info.addClass("popup-expand-active popup--active");
        fix_margin($this_popup_info);
        $get_child.not($this_popup_info).removeClass("popup--active");
        $(".popup-info-wrap--pop.clone-item").addClass("popup--active");

        if($get_child.not($this_popup_info).hasClass("popup-expand-active")) {
            $get_child.not($this_popup_info).removeClass("popup-expand-active");
        }
    });

    popup_info_wrap.on('click','.click-expand-02', function() {
        var $this_popup_info = $(this).parents(".popup-info-wrap--pop");
        $this_popup_info.removeClass("popup-expand-active");
    });
});

function fix_margin(target) {
    target.css("margin-top",-(target.height()));
}

function fix_window() {
    var $window_width = $(window).width();
    var count_max_popup = parseInt($window_width / 490);
    var $popup = $(".popup-info-wrap .popup-info-wrap--pop");
    var $count_popup = $popup.length;
    if($count_popup > count_max_popup) {



    }
}

$(window).resize(function() {

})

//random key
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}