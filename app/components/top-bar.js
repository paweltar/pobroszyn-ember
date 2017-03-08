import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super();
    this.$('#modal-full').on('click', function() {  
       UIkit.modal('#modal-full').hide();
    });
  }
});
