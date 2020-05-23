exports.postAceInit = function(hook_name, args) {
    var backButton = '<li class="ep_back_button-button"><a onclick="window.location = window.location.origin;" title=""><span class="buttonicon buttonicon-undo-alt"></span></a></li>';

    $("#editbar").contents().find("li[data-key='bold']").before(backButton);
}
