import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('muuri-gallery', 'Integration | Component | muuri gallery', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{muuri-gallery}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#muuri-gallery}}
      template block text
    {{/muuri-gallery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
