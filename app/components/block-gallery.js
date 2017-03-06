import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super();
    this.$('.gallery__slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      draggable: true,
      prevArrow: '.slidenav--left',
      nextArrow: '.slidenav--right'
    });
  }
});
