import { PrismaClient } from '@prisma/client';
import assert from 'node:assert/strict';
import test from 'node:test';
import extension from '../src';

test('extension', { only: true }, async (t) => {
  const prisma = new PrismaClient().$extends(extension({}));
  await t.test('some feature', () => {
    assert(prisma);
  });
});
