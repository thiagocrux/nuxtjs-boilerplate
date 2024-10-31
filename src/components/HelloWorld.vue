<script lang="ts" setup>
interface Props {
  text?: string;
}

withDefaults(defineProps<Props>(), {
  text: 'Hello, world!',
});
</script>

<template>
  <div data-testid="hello-world">{{ text }}</div>
</template>
