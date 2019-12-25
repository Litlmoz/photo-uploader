import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | people-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.set('person', 'Marie Curie');
    await render(hbs`<PeopleList @title="List of Scientists" @people={{this.person}} />`);

    assert.equal(this.element.textContent.trim(), 'List of Scientists', 'Marie Curie');

    this.set('person', 'Mae Jemison');
    await render(hbs`<PeopleList @title="List of Scientists" @people={{this.person}} />`);

    assert.equal(this.element.textContent.trim(), 'List of Scientists', 'Mae Jemison');
  });
});
