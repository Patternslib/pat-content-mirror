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

});
