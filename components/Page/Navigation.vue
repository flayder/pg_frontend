<script setup lang="ts">
defineEmits(['navigated'])

defineProps<{
    isExactActive?: boolean
}>()

const pages = [
    {
        link: '/',
        name: 'Home',
        icon: 'home'
    },
    {
        link: '/tags',
        name: 'Tags',
        icon: 'hash'
    },
    {
        link: '/random',
        name: 'Random',
        icon: 'rotate'
    }
]

</script>

<template>
    <nav class="navigation">
        <ul class="navigation__list" :class="{ 'navigation__list--exact-active': isExactActive }">
            <li v-for="(page, index) in pages" :key="index" class="navigation__item">
                <UIButtonLink :to="page.link" :icon="page.icon" :is-exact-active="isExactActive" @click="$emit('navigated')">
                    {{ page.name }}
                </UIButtonLink>
            </li>
            <li class="navigation__item navigation__item--premium">
                <UIButtonLink to="/premium" icon="star" gradient @click="$emit('navigated')">
                    Premium
                </UIButtonLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.navigation {
    &__list {
        width: clamp(min(100%, var(--container-min-width)), 74%, var(--container-max-width));
        margin: 0 auto;
        padding: 0;
        list-style: none;
        display: flex;

        @media (width < $desktop) {
            flex-wrap: wrap;
        }
    }

    &__list--exact-active {
        @media (width < $desktop) {
            flex-direction: column;
        }
    }

    &__item {
        height: 4rem;
        align-content: center;
    }

    &__item--premium {
        padding: 0.5rem 1rem;
    }
}
</style>
