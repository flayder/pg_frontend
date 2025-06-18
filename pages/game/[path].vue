<script setup lang="ts">
const route = useRoute()
const client = useClient()
const dialogContact = useDialogContact()

const { data: application }  = await client.get.game(route.params.path as string)
const { data: games } = await client.get.games()
const similarGames = computed(() => games.value?.filter(({ id }) => id !== application.value?.id))
</script>

<template>
    <PageMain :title="application.title">
        <section v-if="application" class="game">
            <div class="game__description">
                {{ application.description }}
            </div>
            <div class="game__tags">
                <li v-for="tag in application.tags" :key="tag.id" class="game__tags-item">
                    <GameTag class="game__tag" :name="tag.name" />
                </li>
            </div>
            <iframe class="game__application" :src="`https://porngamestown.com${application.gamePath}`"
                allowfullscreen />
            <footer class="game__footer">
                <UIButton class="game__problem" icon="problem" @click="dialogContact.open">Any problem? Contact us!
                </UIButton>
                <div class="game__rating">
                    <GameRating :path="application.path" :likes="application.likes" :liked="application.likedByUser"
                        :dislikes="application.dislikes" :disliked="application.dislikedByUser" />
                    <UIIcon class="game__views" name="eye" /> {{ application?.views }}
                </div>
            </footer>
        </section>
        <section class="similar-games">
            <header class="similar-games__title">Similar games</header>
            <Carousel class="similar-games__slider similar-games__slider--mobile" :gap="16" wrap-around>
                <Slide v-for="game in similarGames" :key="game.id">
                    <GameCard :game />
                </Slide>
            </Carousel>
            <Carousel class="similar-games__slider similar-games__slider--desktop" :items-to-show="3" :gap="48"
                wrap-around>
                <Slide v-for="game in similarGames" :key="game.id">
                    <GameCard :game />
                </Slide>
            </Carousel>
        </section>
    </PageMain>
</template>

<style lang="scss" scoped>
.game {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-tertiary);

    &__description {
        color: var(--color-text);
    }

    &__tags {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    &__tag {
        background-color: var(--color-accent);
    }

    &__application {
        width: 100%;
        aspect-ratio: 16/9;
        border: 1px solid var(--color-accent);
        border-radius: 0.5rem;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
    }

    &__problem {
        font-family: inherit;
        color: var(--color-tertiary);
    }

    &__rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: bold;
        color: var(--color-tertiary);
    }

    &__views {
        fill: none;
    }
}

.similar-games {
    padding: 1rem 0;

    &__title {
        color: var(--color-text);
        font-family: 'Bullet Trace 7';
        font-size: 1.5rem;
    }

    &__slider {
        padding: 1rem 0;
    }

    &__slider--mobile {
        @media (width >=$container) {
            display: none;
        }
    }

    &__slider--desktop {
        @media (width < $container) {
            display: none;
        }
    }
}
</style>