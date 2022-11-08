import { loginLocally } from '../../variables';
import { useLoginMutation as baseUseLoginMutation } from '../__generated__/typesAndHooks';

export function useLoginMutation(
  options?: Parameters<typeof baseUseLoginMutation>[0],
) {
  return baseUseLoginMutation({
    onCompleted() {
      return loginLocally();
    },
    ...options,
  });
}
