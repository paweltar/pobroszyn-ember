import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super();
    this.$('.gallery__slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      infinite: true,
      draggable: true,
      prevArrow: '.slidenav--left',
      nextArrow: '.slidenav--right',
      speed: 600,
      cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'
    });
  }
});
