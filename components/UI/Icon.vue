<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <svg class="icon">
        <use :xlink:href="`#${name}`" />
    </svg>
</template>

<style lang="scss" scoped>
.icon {
    height: 1.5em;
    aspect-ratio: 1;
}
</style>