<script setup lang="ts">
import type { IGame } from '~/types/game';

defineProps<{
    game: IGame
}>()

const config = useRuntimeConfig()
</script>

<template>
    <div class="game-card">
        <NuxtLink class="game-card__preview" :to="`/game/${game.path}`">
            <NuxtImg class="game-card__preview-image" :src="config.public.apiBase + game.preview" alt="preview" />
        </NuxtLink>
        <div class="game-card__info">
            <div class="game-card__title">{{ game.title }}</div>
            <UIButtonLink class="game-card__link" gradient :to="`/game/${game.path}`">Play</UIButtonLink>
            <div class="game-card__views"><UIIcon class="game-card__views-icon" name="eye" /> {{ game.views }}</div>
            <GameRating class="game-card__rating" :path="game.path" :likes="game.likes" :liked="game.likedByUser" :dislikes="game.dislikes" :disliked="game.dislikedByUser" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.game-card {
    background-color: var(--color-secondary);
    border-radius: 0.5rem;
    overflow: hidden;

    &__preview {
        display: block;
        width: 100%;
    }

    &__preview-image {
        width: 100%;
    }

    &__info {
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: auto auto;
        gap: 1rem;
        padding: 1rem 0.5rem;
    }

    &__title {
        color: var(--color-text);
        font-family: 'Bullet Trace 7';
        font-weight: bold;
    }

    &__link {
        font-size: 0.75rem;
        font-family: 'Bullet Trace 7';
        width: 10rem;
    }

    &__views {
        justify-self: end;
        font-weight: bold;
        color: var(--color-tertiary);
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    &__views-icon {
        fill: none;
    }

    &__rating {
        justify-self: end;
        font-size: 0.75rem;
    }
}
</style>