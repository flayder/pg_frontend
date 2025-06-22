<script setup lang="ts">
defineEmits(['navigated'])
const dialogContact = useDialogContact()

defineProps<{
    isExactActive?: boolean
}>()

const pages = [
    {
        link: '/docs/Privacy.docx',
        name: 'Privacy Policy',
        external: true
    },
    {
        link: '/docs/Terms-of-Service.docx',
        name: 'Terms of Service',
        external: true
    },
    {
        link: 'https://support.ccbill.com',
        name: 'CCBill Support',
    },
    {
        link: 'https://support.ccbill.com',
        name: 'How to Cancel Subscription',
    },
    {
        link: '/complaints',
        name: 'Complaints',
    },
]

const mainPages = [
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
    <footer class="footer">
        <div class="footer__navigation">
            <NuxtLink class="footer__logo" to="/">
                <NuxtImg class="footer__logo-image" src="/images/logo.svg" alt="TTOP" />
            </NuxtLink>
            <UIButtonLink to="/premium" icon="star" class="footer__navigation--premium" gradient @click="$emit('navigated')">
                Premium
            </UIButtonLink>
            <div class="footer__navigation--base">
                <UIButtonLink :to="page.link" :icon="page.icon" :is-exact-active="isExactActive" @click="$emit('navigated')" v-for="(page, index) in mainPages">
                    {{ page.name }}
                </UIButtonLink>
            </div>
        </div>
        <div class="footer__info">
            <div class="footer__copyright">Porngamestown 2025 (c)</div>
            <ul class="footer__menu">
                <li v-for="(page, index) in pages" :key="index" class="footer__menu-item">
                    <NuxtLink class="footer__menu-link" :to="page.link" :external="page.external">
                        {{ page.name }}
                    </NuxtLink>
                </li>
                <li class="footer__menu-item">
                    <NuxtLink class="footer__menu-link" to="#" @click.prevent="dialogContact.open">
                        Contact us
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: var(--color-primary);
    border-top: 1px solid var(--color-accent);
    padding-top: 2rem;

    @media (width <=$container) {
        padding: 2rem 1rem 1rem;
    }

    .link {
        align-items: center;
        border: 1px solid transparent;
        display: flex;
        font-family: 'Bullet Trace 7';
        gap: 1rem;
        justify-content: center;
        padding: .75rem 1rem;
        text-decoration: none;
        
        &__label {
            color: var(--color-text);
        }
    }

    &__navigation {
        display: flex;
        align-items: center;
        width: clamp(min(100%, var(--container-min-width)), 74%, var(--container-max-width));
        margin-inline: auto;

        &--base {
            align-content: center;
            display: flex;
            flex-wrap: wrap;
        }

        &--premium {
            @media (width > $desktop) {
                order: 1;
            }
        }

        

        @media (width < $desktop) {
            flex-wrap: wrap;
        }
    }

    &__logo {
        flex-grow: 1;
    }

    &__logo-image {
        height: 4rem;
    }

    &__info {
        display: flex;
        align-items: center;
        width: clamp(min(100%, var(--container-min-width)), 74%, var(--container-max-width));
        margin-inline: auto;

        @media (width < $desktop) {
            flex-wrap: wrap;
        }
    }

    &__copyright {
        flex-grow: 1;
        font-size: 0.75rem;
        color: var(--color-text);
        white-space: nowrap;

        @media (width < $desktop) {
            order: 1;
        }
    }

    &__menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 4rem;
        padding: 4rem 0;

        @media (width <=$desktop) {
            flex-wrap: wrap;
            gap: 1rem 4rem;
            padding: 1.5rem 0;
        }
    }

    &__menu-link {
        text-decoration: none;
        font-size: 0.75rem;
        color: var(--color-text);
    }
}
</style>
