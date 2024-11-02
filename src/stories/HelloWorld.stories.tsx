import type { Meta, StoryObj } from '@nuxtjs/storybook';

import HelloWorld from '@/components/HelloWorld.vue';

const meta: Meta<typeof HelloWorld> = {
  title: 'HelloWorld',
  component: HelloWorld,
  argTypes: {
    text: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {
  name: 'Default',
  args: {
    text: 'Hello, world!',
  },
};

export const DefaultWithCustomText: Story = {
  args: {
    ...Default.args,
    text: 'Custom text',
  },
};
