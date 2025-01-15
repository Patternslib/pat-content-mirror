import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import events from "@patternslib/patternslib/src/core/events";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";

const parser = new Parser("content-mirror");
parser.addArgument("target", "p.content-mirror .text");

class Pattern extends BasePattern {
    static name = "content-mirror";
    static trigger = ".pat-content-mirror";
    static parser = parser;

    async init() {
        this.target = document.querySelector(this.options.target);
        events.add_event_listener(
            this.el,
            "input",
            "pat-content-mirror--update-mirror",
            this.update_mirror.bind(this)
        );

        const form = this.el.form || this.el.closest("form");
        events.add_event_listener(
            form,
            "reset",
            `pat-content-mirror--reset--${this.uuid}`,
            () => {
                this.el.value = "";
                this.el.dispatchEvent(events.input_event());
            }
        );

        const placeholder = this.target.querySelector(".placeholder");
        if (placeholder) {
            placeholder.textContent = this.el.getAttribute("placeholder") || "";
        }
    }

    update_mirror(ev) {
        const el = ev.target;
        const the_mirror = this.target;

        // Get value and replace line breaks and all vertical whitespace with a
        // single space. This wraps multiple lines into a single line while
        // separating them with a space.
        // Also replace any whitespace with a single space character to clean
        // up the text from tabs, multiple whitespace or any other non-standard
        // space character.
        let value = el.value
        value = value.replace(/[\r\n\v\f\s]+/g, " ");

        // Write back the cleaned value to the textearea.
        el.value = value;

        // Write value (or placeholder) to the mirror.
        the_mirror.textContent = value;
        if (!value) {
            const placeholder = this.el.getAttribute("placeholder");
            if (placeholder) {
                the_mirror.innerHTML = `<em class="placeholder">${placeholder}</em>`;
            }
        }
    }
}

registry.register(Pattern);

export default Pattern;
export { Pattern };
