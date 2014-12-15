var Viewer = function(template, view) {
  this.template = template;
  this.view = view;
}

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
  return this.template();
}

Viewer.prototype.renderer = function(elemId) {
  $(elemId).html(this.render());
}

window.Viewer = Viewer;

var bootstrapEditor = function() {
  return '<li class="markItUpButton markItUpButton'+t+(i)+' '+(button.className||'')+'"><a href="" '+key+' title="'+title+'">'+(button.name||'')+'</a></li>';
}

window.template = bootstrapEditor;
