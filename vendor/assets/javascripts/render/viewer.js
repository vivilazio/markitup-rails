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

window.Viewer = Viewer;

var bootstrapEditor = function() {
  return '<li class="markItUpButton markItUpButton'+this.t+(this.i)+' '+this.className+'"><a href="" '+this.key+' title="'+this.title+'" class="btn btn-sm btn-default">'+this.name+'</a></li>';
};

window.template = bootstrapEditor;
