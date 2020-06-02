exports.postAceInit = function(hook_name, args) {
    var backButton = '<li class="ep_back_button-button" data-type="home" data-key="home"><a onclick="window.location = window.location.origin;" title=""><span class="buttonicon buttonicon-home"></span></a></li>';

    $("#editbar").contents().find("li[data-key='bold']").before(backButton);
}
