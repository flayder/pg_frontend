<script setup lang="ts">
import type { IError } from '~/types/error'
import type { IGameLink } from '~/types/game'

const dialogAuth = useDialogAuth()
const user = useUser()
const client = useClient()
const router = useRouter()

var { data: profile } = await client.get.profile()

const search: (query: string) => Promise<IGameLink[] | IError> = useDebounce((query) => client.search.games(query), 500)

const query = ref('')
const output = ref('')
const openProfile = ref(false)
const games: Ref<IGameLink[] | never[]> = ref([])

watch(user, async (val, oldVal) => {
    if(val) {
        user.value = val
        profile.value = await client.get.profile() as any
    }
})

function openProfileFunc() {
    if(openProfile.value)
        openProfile.value = false
    else
        openProfile.value = true
}

async function handleSearch() {
    if (query.value) {
        const data = await search(query.value)

        if ('message' in data) {
            output.value = data.message
            games.value = []
            return
        }

        output.value = ''
        games.value = data as IGameLink[]
        return
    }

    games.value = []
    output.value = ''
}

function toggleNavigation() {
    isNavigationShowed.value = !isNavigationShowed.value
    isSearchShowed.value = false
}

function toggleSearch() {
    isNavigationShowed.value = false
    isSearchShowed.value = !isSearchShowed.value
}

const isNavigationShowed = ref(false)
const isSearchShowed = ref(false)

router.beforeEach(() => {
    output.value = ''
    handleSearch()
    isNavigationShowed.value = false
    isSearchShowed.value = false
})
</script>

<template>
    <header class="header">
        <div class="header__menu">
            <NuxtLink class="header__logo" to="/">
                <NuxtImg class="header__logo-image header__logo-image--desktop" src="/images/label.png" alt="TTOP" />
                <NuxtImg class="header__logo-image header__logo-image--mobile" src="/images/label-mobile.png"
                    alt="TTOP" />
            </NuxtLink>

            <div class="header__controls">
                <UIButton v-if="!user" class="header__login" @click="() => dialogAuth.open('Log in')">Log in</UIButton>
                <div class="header__register" v-if="!user">
                    <UIButton gradient @click="() => dialogAuth.open('Register')">
                        Register
                    </UIButton>
                </div>
                <UIButton v-if="user" class="header__logout" @click="client.auth.logout">Log out</UIButton>
                <div class="profile" v-if="user">
                    <UIButton class="header__profile" icon="user" @click="openProfileFunc" />
                    <div class="profile__wrapper" v-if="profile && openProfile">
                        <div class="profile__info">
                            <div class="profile__nickname">Hello, {{ profile.nickname }}</div>
                            <div>Email: {{ profile.email }}</div>
                            <div>Subscription: {{ profile.subscriptionStatus }}</div>
                            <div>
                                <NuxtLink class="profile__link" to="/forgot-password">
                                    Reset password
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="header__search" :class="{ 'header__search--showed': isSearchShowed }">
                    <UIField v-model="query" class="header__search-input" type="search" name="search" placeholder="Search"
                        @input="handleSearch" />
                    <div v-if="output || games.length > 0" class="header__search-output">
                        <ul v-if="games.length > 0" class="header__search-output-links">
                            <li v-for="game in games" :key="game._id" class="header__search-output-item">
                                <GameLink :game @click="isSearchShowed = false" />
                            </li>
                        </ul>
                        <div v-if="output" class="header__search-output-item">{{ output }}</div>
                    </div>
                </div>
                <UIButton class="header__search-button" icon="search" @click="toggleSearch" />
                <UIButton class="header__burger" :icon="isNavigationShowed ? 'close' : 'menu'"
                    @click="toggleNavigation" />
            </div>
        </div>

        <PageNavigation is-exact-active class="header__navigation"
            :class="{ 'header__navigation--showed': isNavigationShowed }" @navigated="isNavigationShowed = false" />
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: var(--color-primary);
    border-bottom: 1px solid var(--color-accent);
    position: relative;

    &__menu {
        // max-width: var(--container);
        align-items: center;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        margin-inline: auto;
        padding: 1.5rem 0;
        width: clamp(min(100%, var(--container-min-width)), 74%, var(--container-max-width));
        @media (width <=$container) {
            padding: 1.5rem 1rem;
        }
    }

    &__logo {
        height: 3em;
    }

    &__logo-image {
        height: 100%;
        width: auto;
    }

    &__logo-image--desktop {
        @media (width < $desktop) {
            display: none;
        }
    }

    &__logo-image--mobile {
        @media (width >=$desktop) {
            display: none;
        }
    }

    &__search {
        height: 100%;
        flex-grow: 1;

        @media (width < $desktop) {
            position: absolute;
            background-color: var(--color-primary);
            border-top: 1px solid var(--color-accent);
            top: 100%;
            left: 0;
            z-index: 1;
            width: 100%;
            display: none;
            padding: 1.75rem;
            height: fit-content;
        }

        @media (width >=$desktop) {
            position: relative;
            flex-grow: 1;
            order: -1;
            padding: 0 1rem;
        }
    }

    &__search--showed {
        display: revert;
    }

    &__search-output {
        color: var(--color-text);

        @media (width >=$desktop) {
            position: absolute;
            background-color: var(--color-primary);
            top: 100%;
            left: 0;
            z-index: 1;
            width: 100%;
            padding: 0 1rem;
        }
    }

    &__search-output-links {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__search-output-item {
        padding: 1rem 0;
        border-bottom: 1px solid var(--color-accent);

        &:last-child {
            border: 0;
        }
    }

    &__controls {
        display: flex;
        align-items: center;
        @media (width >=$desktop) {
            flex-grow: 1;
        }
    }

    &__search-button {
        padding: 1rem 0.5rem;

        @media (width >=$desktop) {
            display: none;
        }
    }

    &__login {
        white-space: nowrap;
        padding: 1rem 0.5rem;
    }

    &__logout {
        white-space: nowrap;
        padding: 1rem 0.5rem;
    }

    &__register {
        @media (width < $desktop) {
            display: none;
        }
    }

    &__profile {
        padding: 1rem 0.5rem;
    }

    &__burger {
        padding: 1rem 0.5rem;

        @media (width >=$desktop) {
            display: none;
        }
    }

    &__navigation {
        background-color: var(--color-secondary);

        @media (width < $desktop) {
            background-color: var(--color-primary);
            border-top: 1px solid var(--color-accent);
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 1;
            width: 100%;
            display: none;
            padding: 1rem 0;
        }
    }

    &__navigation--showed {
        display: revert;
    }
}
.profile {
    position: relative;
    &__wrapper {
        &:after,
        &:before {
            border-left: .75rem solid transparent;
            border-right: .75rem solid transparent;
            content: "";
            left: 50%;
            position: absolute;
            translate: -50% 0;
        }
        &:before {
            border-bottom: 1rem solid var(--color-accent);
            bottom: 0;
        }
        &:after {
            border-bottom: 1rem solid var(--color-primary);
            bottom: -2px;
        }
    }
    
    &__info {
        background-color: var(--color-primary);
        border: 1px solid var(--color-accent);
        border-radius: .5rem;
        color: var(--color-text);
        display: flex;
        flex-direction: column;
        font-weight: 700;
        gap: .5rem;
        padding: 1rem;
        position: absolute;
        right: 0;
        top: 100%;
        width: -moz-max-content;
        width: max-content;
    }
    &__nickname {
        border-bottom: 1px solid var(--color-accent);
        padding-bottom: .5rem;
    }
    &__link {
        color: var(--color-accent);
    }
}
</style>
