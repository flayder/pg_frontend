<script setup lang="ts">
defineProps<{
    title?: string
}>()
</script>

<template>
    <div class="card">
        <header v-if="title" class="card__title">{{ title }}</header>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: var(--color-primary);
    border-radius: .5rem;
    padding: 3rem;
    position: relative;
    width: min(100%, 32rem);

    &__title {
        color: var(--color-text);
        font-family: 'Bullet Trace 7';
        font-size: 2rem;
        text-align: center;
    }
}
</style>