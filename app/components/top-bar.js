import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super();
    this.$('#modal-full').on('click', function(e) {
       $('#modal-full').fadeOut(300);  
       UIkit.modal('#modal-full').hide();
    });
  }
});
