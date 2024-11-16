import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import HelloWorld from '~/components/HelloWorld.vue';

describe('<HelloWorld />', () => {
  it('should render the text passed on prop', async () => {
    const component = await mountSuspended(HelloWorld);
    const wrapper = component.get('[data-testid="hello-world"]');
    expect(wrapper.text()).toBe('Hello, world!');
  });

  it('should render a light color text when the color prop is equal to "light"', async () => {
    const component = await mountSuspended(HelloWorld, {
      props: { color: 'light' },
    });

    const wrapper = component.get('[data-testid="hello-world"]');
    expect(wrapper.classes()).toContain('text-gray-50');
  });

  it('should render the a bold text when the isBold prop is true', async () => {
    const component = await mountSuspended(HelloWorld, {
      props: { isBold: true },
    });

    const wrapper = component.get('[data-testid="hello-world"]');
    expect(wrapper.classes()).toContain('font-bold');
  });
});
