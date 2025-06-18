<script setup lang="ts">
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
        link: '#',
        name: 'Contact Us',
    },
]
</script>

<template>
    <footer class="footer">
        <div class="footer__navigation">
            <NuxtLink class="footer__logo" to="/">
                <NuxtImg class="footer__logo-image" src="/images/logo.svg" alt="TTOP" />
            </NuxtLink>
            <PageNavigation />
        </div>
        <div class="footer__info">
            <div class="footer__copyright">Porngamestown 2025 (c)</div>
            <ul class="footer__menu">
                <li v-for="(page, index) in pages" :key="index" class="footer__menu-item">
                    <NuxtLink class="footer__menu-link" :to="page.link" :external="page.external">
                        {{ page.name }}
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

    &__navigation {
        display: flex;
        align-items: center;
        max-width: var(--container);
        margin-inline: auto;

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
        max-width: var(--container);
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
