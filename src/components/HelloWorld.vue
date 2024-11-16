<script lang="ts" setup>
type Props = {
  text?: string;
  color?: 'dark' | 'light';
  isBold?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  text: 'Hello, world!',
  color: 'dark',
  isBold: false,
});

const styleModifiers = computed(() => {
  const color = props.color === 'dark' ? 'text-gray-500' : 'text-gray-50';
  const fontWeight = props.isBold ? 'font-bold' : 'font-normal';
  return `text-lg ${color} ${fontWeight}`;
});
</script>

<template>
  <div data-testid="hello-world" :class="styleModifiers">
    {{ text }}
  </div>
</template>
