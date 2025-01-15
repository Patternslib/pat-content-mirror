pat-content-mirror
==================

A pattern that provides rich dynamic functionality to a textarea. It is used
for single-line text input that should be able to wrap into the next line.
Line breaks, tabs or multiple space characters are not allowed, removed from
the text input and replaced with a single space character.

The main functionality is provided by maintaining a "mirror" element that
is updated every time the main textarea is changed.  This element, which
can be specified using a CSS selector in the `target` option, sits behind the
textarea, and allows us to overcome the limitations of text-only content in
the html textarea element.  The user interacts with the textarea, mostly by
typing, and the .content-mirror reflects the textarea content, but can also
contain links to other users or tags.

The difference to a contenteditable element is, that a textarea automatically
participates as a form element in form submissions and validation.

The pattern would typically be applied to a textarea element, though it is
not required.
In addition, another element must be present to act as the content mirror.
When the designated content mirror is empty, the pattern injects a placeholder
element (`<em class="placeholder">Leave a comment</em>`).

By default, the pattern looks for the content mirror using the CSS selector
`p.content-mirror .text`, though this can be overridden by the `target`
option.

The placeholder can be overridden by the `placeholder` attribute.

The example html below shows a structure that would work with the defaults:

    <p class="content-mirror"
        ><span class="text"
        ><em class="placeholder">Leave a comment</em></span
        ></p>
    <textarea placeholder="Leave a comment" class="pat-content-mirror"></textarea>


## Documentation

Property | Value | Default | Type | Description
---------|-------|---------|------|------------
target | a CSS selector | `p.content-mirror .text` | string | a CSS selector that indicates in which element(s) the content of the textarea should be mirrored

