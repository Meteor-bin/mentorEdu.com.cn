define(function(require, exports, module) {
    function fnLogo() {
        $("#logo").animate({
            top: "26px"
        },
        100, "backOut",
        function() {
            $.setCss($("#logo"), {
                $Transtion: "0.2s"
            });
            $("#logo").mouseover(function() {
                $(this).addClass("logoShow")
            });
            $("#logo").mouseout(function() {
                $(this).removeClass("logoShow")
            });
            $('#logo').find("a").click(function() {
                require('./hide').hide(window.location.hash, this.dataset.hash)
            })
        })
    };
    exports.logo = fnLogo
});