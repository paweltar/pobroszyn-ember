import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super();
    console.log('no elo');
    this.$('.gallery__slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  }
});
