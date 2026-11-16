
import test from 'node:test';
import assert from 'node:assert/strict';

test('SILAMAS memiliki nama proyek yang benar', async () => {
  const packageData = await import('../package.json', {
    with: { type: 'json' }
  });

  assert.equal(packageData.default.name, 'silamas-web');
});

test('SILAMAS memiliki script build dan lint', async () => {
  const packageData = await import('../package.json', {
    with: { type: 'json' }
  });

  assert.ok(packageData.default.scripts.build);
  assert.ok(packageData.default.scripts.lint);
});
