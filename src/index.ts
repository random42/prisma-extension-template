import { Prisma } from '@prisma/client/extension';

export default (config: any) => {
  return Prisma.defineExtension({
    name: '',
  });
};
