var Viewer = function(template, view) {
  this.template = template;
  this.view = view;
}

Viewer.prototype.render = function() {
  var k;
  for k in this.view {
    var v = this.view[k];
    if (typeof v === 'function') {
      valore = this.view[k]();
    } else {
      valore = this.view[k];
    }
    this[k] = valore;
  }
  return this.template();
}

Viewer.prototype.renderer = function(elemId) {
  $(elemId).html(this.render());
}
