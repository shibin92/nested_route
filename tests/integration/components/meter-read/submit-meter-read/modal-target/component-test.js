import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('meter-read/submit-meter-read/modal-target', 'Integration | Component | meter read/submit meter read/modal target', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{meter-read/submit-meter-read/modal-target}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#meter-read/submit-meter-read/modal-target}}
      template block text
    {{/meter-read/submit-meter-read/modal-target}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
