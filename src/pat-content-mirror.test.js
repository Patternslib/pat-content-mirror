import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./pat-content-mirror";
import utils from "@patternslib/patternslib/src/core/utils";

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

        pattern.init(document.querySelector(".pat-content-mirror"));
        await utils.timeout(1);

        const textarea = document.querySelector("textarea");
        textarea.value = "this is a test text.";
        textarea.dispatchEvent(new Event("input"));

        expect(document.querySelector(".mirror .text").textContent).toBe(
            "this is a test text."
        );
    });
});
