<script setup lang="ts">
defineProps<{
    title: string
    description: string
    confirmed: boolean
}>()

defineEmits(['confirmation'])

const code = ref('')
</script>

<template>
    <div class="confirmation">
        <form class="confirmation__form" @submit.prevent="$emit('confirmation', Number(code))">
            <UIIcon v-if="confirmed" class="confirmation__icon" name="confirm" />
            <h1 class="confirmation__title">{{ title }}</h1>
            <div class="confirmation__description">
                {{ description }}
            </div>
            <UIField v-if="!confirmed" v-model="code" name="confirmation" type="code"/>
            <UIButton v-if="!confirmed" class="confirmation__submit" gradient>Confirm</UIButton>
            <UIButtonLink v-if="confirmed" class="confirmation__link" to="/" gradient>Homepage</UIButtonLink>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.confirmation {
    align-content: center;
    margin-inline: auto;
    width: min-content;

    &__form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    &__icon {
        color: var(--color-success);
        font-size: 2rem;
        fill: none;
    }

    &__title {
        color: var(--color-text);
        font-weight: normal;
        font-family: 'Bullet Trace 7';
        font-size: 2.5rem;
        width: fit-content;
        white-space: nowrap;
        margin: 0;
    }

    &__description {
        color: var(--color-text);
        white-space: pre-line;
        text-align: center;
    }

    &__submit {
        width: 100%;
        font-size: 1.25rem;
    }

    &__link {
        font-size: 1.25rem;
    }
}
</style>