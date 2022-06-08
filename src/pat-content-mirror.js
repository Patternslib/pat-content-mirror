import $ from "jquery";
import Base from "@patternslib/patternslib/src/core/base";
import Parser from "@patternslib/patternslib/src/core/parser";

const parser = new Parser("content-mirror");
parser.addArgument("target", "p.content-mirror .text");

export default Base.extend({
    name: "content-mirror",
    trigger: ".pat-content-mirror",

    init: function content_mirror_init($el) {
        this.options = parser.parse(this.el, this.options);
        const $mirror = $(this.options.target).parents("p.content-mirror").first();
        $el.on(
            "input propertychange",
            $.proxy(this.updateMirror, this, this.options.target)
        );
        $el.parents("form")
            .first()
            .on("reset", function () {
                $el.val("");
                $mirror.html($mirror.html());
            });
        $(".placeholder", this.options.target).text($el.attr("placeholder") || "");
    },

    updateMirror: function updateMirror(target, ev) {
        const $el = $(ev.target);
        const the_mirror = $(target);
        the_mirror.text($el.val());
        if (!$el.val().length) {
            const placeholder = $el.attr("placeholder");
            if (placeholder) {
                the_mirror.html('<em class="placeholder">' + placeholder + "</em>");
            }
        }
    },
});
