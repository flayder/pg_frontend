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
    align-items: center;
    background-color: transparent;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    display: flex;
    font-family: 'Bullet Trace 7';
    gap: 1rem;
    justify-content: center;
    padding: 1rem .5rem;

    &__icon {
        height: 1.5rem;
        aspect-ratio: 1;
        fill: none;
    }
}

.button--gradient {
    background-image: var(--gradient-accent);
    border-radius: .5rem;
    padding: 1rem 4rem;
}

.button--outline {
    border: 1px solid var(--color-accent);
    border-radius: 0.5rem;
}
</style>