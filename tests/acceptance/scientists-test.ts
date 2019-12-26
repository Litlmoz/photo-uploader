import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | scientists', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /scientists', async function(assert) {
    assert.expect(3);
    await visit('/scientists');

    assert.equal(currentURL(), '/scientists');
    assert.dom('h2').hasText('List of Scientists');

    assert.dom('.showPerson').hasText('Marie Curie');
  });
});
