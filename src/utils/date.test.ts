import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { formatDate } from './date.ts';

test('formatDate formats a date as Month D, YYYY', async () => {
  expect(formatDate(new Date(2026, 8, 23))).toBe('Sep 23, 2026')
});