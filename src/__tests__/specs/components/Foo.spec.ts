import { mountSuspended } from '@nuxt/test-utils/runtime';
import { expect, it } from 'vitest';
import Foo from '@/components/Foo.vue';

it('should render the text', async () => {
  const component = await mountSuspended(Foo);
  const wrapper = component.get('[data-testid="foo"]');
  expect(wrapper).toBeTruthy();
});
