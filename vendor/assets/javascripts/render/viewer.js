(function($) {
  $.markItUp = function(settings) {
    var options = { target:false };
    $.extend(options, settings);
    if (options.target) {
      return $(options.target).each(function() {
        $(this).focus();
        $(this).trigger('insertion', [options]);
      });
    } else {
      $('textarea').trigger('insertion', [options]);
    }
  };

  var Viewer = function(template, view) {
    this.template = template;
    this.view = view;
  };

  Viewer.prototype.render = function() {
    var k;
    for (k in this.view) {
      var v = this.view[k];
      if (typeof v === 'function') {
        valore = this.view[k]();
      } else {
        valore = this.view[k];
      }
      this[k] = valore;
    }
    console.log(this);
    return this.template();
  };

  Viewer.prototype.renderer = function(elemId) {
    $(elemId).html(this.render());
  };

  $.markItUp.Viewer = Viewer;

  var bootstrapEditor = function() {
    return '<li class="markItUpButton markItUpButton'+this.t+(this.i)+' '+(this.className||'')+'"><a href="" '+(this.key ? 'accesskey="'+this.key+'"' : '')+' title="'+(this.key ? (this.name||'')+' [Ctrl+'+this.key+']' : '')+'" class="btn btn-sm btn-default">'+this.name+'</a></li>';
  };

  $.markItUp.templates = {};
  $.markItUp.templates.default = bootstrapEditor;
})(jQuery);
