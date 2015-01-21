/* Update Social pattern */

define([
  "jquery",
  "underscore",
  "pat-registry",
  "pat-parser",
], function($, _, registry, Parser) {
  "use strict";

  var parser = new Parser("content-mirror");
  parser.add_argument("target"); 

  var contentmirror = {
    name: "content-mirror",
    trigger: ".pat-content-mirror",
    defaults: {
      target: "p.content-mirror .text"
    },

    init: function content_mirror_init($el, opts) {
      $el.on('input propertychange', $.proxy(this.updateMirror, this));
      var options = parser.parse($el, opts, true)[0]
      this.cfgs = _.extend(_.clone(this.defaults), options);
      $(".placeholder", this.cfgs.target).text($el.attr("placeholder")||'');
    },

    updateMirror : function updateMirror(ev) {
        var $el = $(ev.target);
//        var the_mirror = $el.siblings('p.content-mirror').find('.text');
        var the_mirror = $(this.cfgs.target);
        the_mirror.text($el.val());
        if(!$el.val().length){
          var placeholder = $el.attr("placeholder");
          if (placeholder) {
            the_mirror.html('<em class="placeholder">'+placeholder+'</em>');
          }
        }
    }

    /*

  Lifted from:
    https://github.com/cosent/plonesocial.microblog/blob/master/plonesocial/microblog/browser/status.pt

    The .submit code below will need to be added to this pattern once
    the tags and users query functionality is implemented.
  It will not be a handler on the form, but on the individual textarea.

    $(document).ready(function(){

        $('form.update-social').submit(function(event){
            var textarea = $(this).find('textarea');
            var selected_tags = $(this).find('.selected-tags a');
            var selected_users = $(this).find('.selected-users a');
            var tags = '';
            var users = '';

            for (i = 0; i < selected_users.length; i++) {
                users = users + ' @' + selected_users[i].dataset.userId;
            }

            for (i = 0; i < selected_tags.length; i++) {
                tags = tags + ' ' + selected_tags[i].text;
            }

            users = users?' — ' + users:users
            tags = tags?' — ' + tags:tags

            textarea.val(textarea.val() + users + tags);
        });
    });
  */
  };
  registry.register(contentmirror);
});
