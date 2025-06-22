<script setup lang="ts">
const { title } = defineProps<{
    title: string
}>()

useHead({
  title
})
</script>

<template>
    <main class="main">
        <header class="main__header">
            <h1 class="main__title">{{ title }}</h1>
            <div v-if="$slots.menu" class="main__menu"><slot name="menu" /></div>
        </header>
        <slot />
    </main>
</template>

<style lang="scss" scoped>
.main {
    padding: 2rem;

    @media (width >= $desktop) {
        padding-top: 4rem;
    }

    &__header {
        display: flex;
        gap: 1.5rem;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--color-tertiary);

        @media (width < $desktop) {
            flex-wrap: wrap;
        }
    }

    &__title {
        font-family: 'Bullet Trace 7';
        font-size: 1.5rem;
        font-weight: normal;
        color: var(--color-text);
        padding: 0;
        margin: 0;

        @media (width > $desktop) {
            font-size: 2rem;
        }
    }
}
</style>