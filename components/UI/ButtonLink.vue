<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
    to: RouteLocationRaw
    icon?: string
    isExactActive?: boolean
    gradient?: boolean
}>()
</script>

<template>
    <NuxtLink
        v-if="isExactActive"
        class="link link--exact-active"
        :to="to"
        exact-active-class="link--active"
    >
        <svg v-if="icon" class="link__icon">
            <use :xlink:href="`#${icon}`" />
        </svg>
        <div v-if="$slots.default" class="link__label">
            <slot />
        </div>
    </NuxtLink>

    <NuxtLink
        v-else
        class="link"
        :class="{ 'link--gradient': gradient }"
        :to="to"
    >
        <svg v-if="icon" class="link__icon" :class="{ 'link__icon--gradient': gradient }">
            <use :xlink:href="`#${icon}`" />
        </svg>
        <div v-if="$slots.default" class="link__label">
            <slot />
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
    height: 100%;
    border: 1px solid transparent;

    &__icon {
        height: 1.5rem;
        aspect-ratio: 1;
        color: var(--color-text);
        fill: none;
    }

    &__icon--gradient {
        color: var(--color-checked);
        fill: var(--color-checked);
    }

    &__label {
        color: var(--color-text);
    }
}

.link--exact-active {
    @media (width < $desktop) {
        justify-content: start;
    }
}

.link--gradient {
    background-image: var(--gradient-accent);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    border: 0;
}

@media (width >= $desktop) {
    .link--active {
        background-color: var(--color-primary);
        border-color: var(--color-accent);
        border-radius: 0.25rem 0.25rem 0 0;
        position: relative;
    }

    .link--active::after {
        content: '';
        position: absolute;
        top: 100%;
        width: 100%;
        height: 2px;
        background-color: var(--color-primary);
    }
}
</style>
