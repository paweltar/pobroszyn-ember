import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super();
      var grid = UIkit.grid(UIkit.$('#gallery__grid'));
      grid.updateLayout()
  }
});
