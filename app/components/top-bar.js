import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super();
    this.$('#modal-full').on('click', function(e) {  
       UIkit.modal('#modal-full').hide();
    });
  }
});
