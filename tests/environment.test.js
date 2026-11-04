import test from 'node:test';
import assert from 'node:assert/strict';
import { environmentLabel, normalizeEnvironment } from '../src/lib/environment.js';

test('normaliza los nombres de los entornos', () => {
  assert.equal(normalizeEnvironment('Staging'), 'staging');
  assert.equal(normalizeEnvironment('PRODUCTION'), 'production');
  assert.equal(normalizeEnvironment(undefined), 'local');
});

test('presenta la etiqueta correcta', () => {
  assert.equal(environmentLabel('staging'), 'Staging');
  assert.equal(environmentLabel('production'), 'Production');
});
