import type { Meta, StoryObj } from '@nuxtjs/storybook';

import HelloWorld from '@/components/HelloWorld.vue';

const meta: Meta<typeof HelloWorld> = {
  title: 'HelloWorld',
  component: HelloWorld,
  argTypes: {
    text: {
      type: 'string',
      description: 'The text content',
      table: { defaultValue: { summary: 'Hello, world!' } },
    },
    color: {
      type: 'string',
      control: 'select',
      options: ['dark', 'light'],
      description: 'The text color variant',
      table: { defaultValue: { summary: 'dark' } },
    },
    isBold: {
      type: 'boolean',
      description: 'Is the font bold?',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {
  name: 'Default',
  args: {
    text: 'Hello, world!',
    color: 'dark',
    isBold: false,
  },
};

export const DefaultWithCustomText: Story = {
  args: {
    ...Default.args,
    text: 'Custom text',
  },
};
