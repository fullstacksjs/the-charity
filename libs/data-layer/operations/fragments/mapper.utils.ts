import { isNull } from '@fullstacksjs/toolbox';

export const hasNullish = (config: Record<string, any>) =>
  Object.values(config).some(isNull);
