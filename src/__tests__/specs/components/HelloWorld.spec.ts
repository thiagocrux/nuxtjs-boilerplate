import { mountSuspended } from '@nuxt/test-utils/runtime';
import { expect, it } from 'vitest';
import HelloWorld from '~/components/HelloWorld.vue';

it('should render the text', async () => {
  const component = await mountSuspended(HelloWorld);
  const wrapper = component.get('[data-testid="hello-world"]');
  expect(wrapper.text()).toBe('Hello, world!');
});
