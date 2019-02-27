import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-html-table-to-excel-button', 'Integration | Component | ember-html-table-to-excel-button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ember-html-table-to-excel-button}}`);
  assert.equal(this.$("button").length, 1);
  assert.equal(this.$(".ember-html-table-to-excel-button").length, 1);
});
