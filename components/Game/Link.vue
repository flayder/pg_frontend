<script setup lang="ts">
import type { IGameLink } from '~/types/game';

defineProps<{
    game: IGameLink
}>()

const config = useRuntimeConfig()
</script>

<template>
    <NuxtLink class="game-link" :to="`/game/${game.path}`">
        <header class="game-link__title">{{ game.title }}</header>
        <NuxtImg class="game-link__image" :src="config.public.apiBase + game.image" alt="preview" />
        <div class="game-link__description">{{ game.description }}</div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.game-link {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1rem auto;
    gap: 1rem;
    color: var(--color-text);
    text-decoration: none;

    &__title {
        grid-column: 2;
    }

    &__image {
        width: 100%;
        height: auto;
        grid-row: 1 / 3;
    }

    &__description {
        grid-column: 2;
        grid-row: 2;
        font-size: 0.75rem;
    }
}
</style>