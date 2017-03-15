import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('o-nas');
  this.route('pytania');
  this.route('galeria');
  this.route('wspomnienia');
});

export default Router;
