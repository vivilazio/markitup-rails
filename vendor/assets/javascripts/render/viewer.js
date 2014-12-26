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

  var ElementViewer = function(template, view) {
    this.template = template;
    this.view = view;
  };

  ElementViewer.prototype.render = function() {
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
    return this.template();
  };

  ElementViewer.prototype.renderer = function(elemId) {
    $(elemId).html(this.render());
  };

  $.markItUp.ElementViewer = ElementViewer;

  var createButton = function() {
    return '<a href="" '+(this.key ? 'accesskey="'+this.key+'"' : '')+' title="'+(this.key ? (this.name||'')+' [Ctrl+'+this.key+']' : '')+'" class="btn btn-sm btn-default btn-'+this.i+'"><span class="glyphicon glyphicon-'+this.icon+'"></span></a>';
  };

  var bootstrapEditor = {
    createButton: createButton,
    createToolbar: '<div class="btn-toolbar" role="toolbar" aria-label="..."></div>',
    createButtonGroup: '<div class="btn-group" role="group" aria-label="..."></div>'
  };
  $.markItUp.templates = {};
  $.markItUp.templates.default = bootstrapEditor;
})(jQuery);
