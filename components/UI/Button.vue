<script setup lang="ts">
defineProps<{
    type?: ButtonTypeAttribute
    icon?: string
    gradient?: boolean
    outline?: boolean
}>()
</script>

<template>
    <button class="button" :type="type" :class="{ 'button--gradient': gradient, 'button--outline': outline }">
        <svg v-if="icon" class="button__icon">
            <use :xlink:href="`#${icon}`" />
        </svg>
        <div v-if="$slots.default" class="button__label">
            <slot />
        </div>
    </button>
</template>

<style lang="scss" scoped>
.button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Bullet Trace 7';
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0;
    height: 100%;
    color: var(--color-text);

    &__icon {
        height: 1.5rem;
        aspect-ratio: 1;
        fill: none;
    }
}

.button--gradient {
    background-image: var(--gradient-accent);
    border-radius: 0.5rem;
    padding: 0.5rem 4rem;
}

.button--outline {
    border: 1px solid var(--color-accent);
    border-radius: 0.5rem;
}
</style>