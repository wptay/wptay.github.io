$(".body_modal").click(function () {
    $('body').removeClass('noscroll');
    $(this).hide();
});

$(".display_element").click(function(){
    var node_id = $(this).attr('id');
    node_elem = node_id.substr(node_id.length - 1); //get last character
    var topic_title = $("#topictitle" + node_elem).html();
    $("#body_modal" + node_elem + " .topic").html("Selected Publications for '" + topic_title + "'");
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var modal_top = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;;
    $('body').addClass('noscroll');
    $(".body_modal").css("top", modal_top + "px");
    $("#body_modal" + node_elem).show();
});
