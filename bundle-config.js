define([
   "jquery",
   "pat-registry",
   "pat-content-mirror", 
   "jquery.browser"
], function($, registry) {
    // Since we are in a non-AMD env, register a few useful utilites
    var window = require("window");
    window.jQuery = $;
    require("imports-loader?this=>window!jquery.browser");
    // if ($.browser.msie) {
    //     $("#settings").remove();
    // }
    $(function () {
        registry.init();
    });
    return registry;
});

