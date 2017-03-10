import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super();
    this.$('#gallery__grid a').simpleLightbox();
  }
});
