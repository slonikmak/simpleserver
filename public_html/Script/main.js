$(function(){
    console.log("start!");
    
    let statusController = new StatusController();
    statusController.update();
    
    let logsController = new LogsController();
    
    
    $("li").click(function(){
        let elemId = $(this).attr('data-elem');
        let elem = $('#' + elemId);
        let checkbox = $(this).find("input");
        if (checkbox.prop("checked")){
            console.log("checked");
            elem.css("display", "none");
            checkbox.removeAttr("checked");
        } else {
            elem.css("display", "block");
            checkbox.attr('checked', 'checked');
        }
        console.log(elemId);
        console.log($(this).find("input").attr("checked"))
    });

    $("#menu-btn").click(function (e) {
        if ($("#leftPannel").css("display")==="none"){
            $("#leftPannel").css("display", "block");
        } else {
            $("#leftPannel").css("display", "none");
        }
    });
    
    let map = initMap();

    let helmController = new HelmController();

    let databaseController = new DataBase();

    
});



