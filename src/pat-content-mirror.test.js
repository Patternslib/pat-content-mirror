import Pattern from "./pat-content-mirror";
import events from "@patternslib/patternslib/src/core/events";

describe("pat-content-mirror", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `
    	    <p class="mirror"><span class="text"></span></p>
	    	<textarea
                class="pat-content-mirror"
                data-pat-content-mirror="target:.mirror .text"></textarea>
        `;

        const instance = new Pattern(document.querySelector(".pat-content-mirror"));
        await events.await_pattern_init(instance);

        const textarea = document.querySelector("textarea");
        textarea.value = "this is a test text.";
        textarea.dispatchEvent(new Event("input"));

        expect(document.querySelector(".mirror .text").textContent).toBe(
            "this is a test text."
        );
    });

    it("Works also with other than the default proposed markup structure.", async () => {
        document.body.innerHTML = `
            <section class="the-mirror"></section>
            <textarea
                class="pat-content-mirror"
                data-pat-content-mirror="target:.the-mirror"></textarea>
        `;

        const instance = new Pattern(document.querySelector(".pat-content-mirror"));
        await events.await_pattern_init(instance);

        const textarea = document.querySelector("textarea");
        textarea.value = "this is a test text.";
        textarea.dispatchEvent(new Event("input"));

        expect(document.querySelector(".the-mirror").textContent).toBe(
            "this is a test text."
        );
    });

    it("works with multiple content mirrors.", async () => {
        document.body.innerHTML = `
    	    <p class="mirror-1"><span class="text"></span></p>
	    	<textarea
                class="txt-1 pat-content-mirror"
                data-pat-content-mirror="target:.mirror-1 .text"></textarea>

    	    <p class="mirror-2"><span class="text"></span></p>
	    	<textarea
                class="txt-2 pat-content-mirror"
                data-pat-content-mirror="target:.mirror-2 .text"></textarea>
        `;

        const txt1 = document.querySelector(".txt-1");
        const txt2 = document.querySelector(".txt-2");

        const mirror1 = document.querySelector(".mirror-1 .text");
        const mirror2 = document.querySelector(".mirror-2 .text");

        const instance1 = new Pattern(txt1);
        const instance2 = new Pattern(txt2);

        await events.await_pattern_init(instance1);
        await events.await_pattern_init(instance2);

        txt1.value = "this is a test text 1.";
        txt2.value = "this is a test text 2.";

        txt1.dispatchEvent(new Event("input"));
        txt2.dispatchEvent(new Event("input"));

        expect(mirror1.textContent).toBe("this is a test text 1.");
        expect(mirror2.textContent).toBe("this is a test text 2.");
    });

    it("works with multiple content mirrors, placeholders and form resets.", async () => {
        document.body.innerHTML = `
            <form>
                <p class="mirror-1">
                    <span class="text">
                        <em class="placeholder"></em>
                    </span>
                </p>
                <textarea
                    class="txt-1 pat-content-mirror"
                    data-pat-content-mirror="target:.mirror-1 .text"
                    placeholder="placeholder 1"></textarea>

                <p class="mirror-2">
                    <span class="text">
                        <em class="placeholder"></em>
                    </span>
                </p>
                <textarea
                    class="txt-2 pat-content-mirror"
                    data-pat-content-mirror="target:.mirror-2 .text"
                    placeholder="placeholder 2"></textarea>

                <button type="reset">Reset</button>
            </form>
        `;

        const txt1 = document.querySelector(".txt-1");
        const txt2 = document.querySelector(".txt-2");

        const mirror1 = document.querySelector(".mirror-1 .text");
        const mirror2 = document.querySelector(".mirror-2 .text");

        const instance1 = new Pattern(txt1);
        const instance2 = new Pattern(txt2);

        await events.await_pattern_init(instance1);
        await events.await_pattern_init(instance2);

        expect(mirror1.textContent.trim()).toBe("placeholder 1");
        expect(mirror2.textContent.trim()).toBe("placeholder 2");

        txt1.value = "this is a test text 1.";
        txt2.value = "this is a test text 2.";

        txt1.dispatchEvent(new Event("input"));
        txt2.dispatchEvent(new Event("input"));

        expect(mirror1.textContent).toBe("this is a test text 1.");
        expect(mirror2.textContent).toBe("this is a test text 2.");

        const button = document.querySelector("button");
        button.click();

        expect(mirror1.textContent.trim()).toBe("placeholder 1");
        expect(mirror2.textContent).toBe("placeholder 2");
    });

    it("Removes line breaks.", async () => {
        document.body.innerHTML = `
            <section class="the-mirror"></section>
            <textarea
                class="pat-content-mirror"
                data-pat-content-mirror="target:.the-mirror"></textarea>
        `;

        const instance = new Pattern(document.querySelector(".pat-content-mirror"));
        await events.await_pattern_init(instance);

        const textarea = document.querySelector("textarea");
        textarea.value = "line1\nline2\rline3\r\nline4\n\rline5\vline7\fend";
        textarea.dispatchEvent(new Event("input"));

        expect(document.querySelector(".the-mirror").textContent).toBe(
            "line1 line2 line3 line4 line5 line7 end"
        );
    });

});
