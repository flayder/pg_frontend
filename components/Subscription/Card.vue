<script setup lang="ts">
defineProps<{
    subscription: unknown
    authenticated: boolean
}>()

const dialogAuth = useDialogAuth()
</script>

<template>
    <div class="subscription-card" :class="{ 'subscription-card--accent': subscription.accent }">
        <header class="subscription-card__name">{{ subscription.name }}</header>
        <div class="subscription-card__old-price">{{ subscription.oldPrice }}</div>
        <div class="subscription-card__price">{{ subscription.price }}</div>
        <div class="subscription-card__include">{{ subscription.include }}</div>
        <div class="subscription-card__trial">{{ subscription.trial }}</div>
        <div class="subscription-card__description">{{ subscription.description }}</div>
        <div v-if="subscription.discount" class="subscription-card__discount">
            <UIIcon class="subscription-card__discount-icon" name="star" /> {{ subscription.discount }}
        </div>
        <UIButtonLink v-if="authenticated" class="subscription-card__link"
            :class="{ 'subscription-card__link--accent': subscription.accent }" :to="subscription.link" gradient>Get
            Premium</UIButtonLink>
        <UIButton v-else class="subscription-card__button"
            :class="{ 'subscription-card__button--accent': subscription.accent }" gradient @click="() => dialogAuth.open('Register')">Get Premium</UIButton>
    </div>
</template>

<style lang="scss" scoped>
.subscription-card {
    border: 1px solid var(--color-accent);
    padding: 2.5rem;
    border-radius: 0.5rem;
    color: var(--color-text);
    text-align: center;
    position: relative;

    &__name {
        font-family: 'Bullet Trace 7';
        font-size: 1.5rem;
        padding-bottom: 0.5rem;
    }

    &__old-price {
        font-size: 1.5rem;
        text-decoration: line-through;
        opacity: 0.6;
    }

    &__price {
        font-size: 2rem;
    }

    &__include {
        font-size: 0.75rem;
        opacity: 0.6;
    }

    &__trial {
        padding-top: 1rem;
    }

    &__description {
        padding: 3rem 0 1rem;
        font-family: "Bullet Trace 7";
    }

    &__discount {
        position: absolute;
        top: 0;
        right: 10%;
        border: 1px solid var(--color-accent);
        border-radius: 9999px;
        background-color: var(--color-primary);
        translate: 0 -50%;
        padding: 0.25rem 2rem 0.25rem 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        white-space: nowrap;
    }

    &__discount-icon {
        fill: var(--color-checked);
        color: var(--color-checked);
    }

    &__link {
        padding: 1rem;
    }

    &__link--accent {
        background-image: var(--gradient-primary);
    }

    &__button {
        padding: 1rem;
        width: 100%;
    }

    &__button--accent {
        background-image: var(--gradient-primary);
    }
}

.subscription-card--accent {
    background-color: var(--color-accent);
}
</style>