<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const route = useRoute()
const client = useClient()
const dialogContact = useDialogContact()
const $device = useDevice()
const isFullScreen = ref(false)

const { data: application }  = await client.get.game(route.params.path as string)
const { data: games } = await client.get.games()
const similarGames = computed(() => games.value?.filter(({ id, active }) => id !== application.value?.id && active !== false))

const iosFullScreen = () => {
    if(!isFullScreen.value)
        isFullScreen.value = true
    else
        isFullScreen.value = false
}

onMounted(() => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    // можно задать кастомные параметры
    Thumbs: false,
    Toolbar: {
      display: ["zoom", "close"]
    }
  });


  if($device.isIos) {

    const setBtnStyles = () => {
      var iframe: any = document.querySelector('.game__application')
      var iframeBtn: any = document.querySelector('.game__iframe-fullscreen')
      var btnWidth = 33 + iframe.clientWidth * 0.025
    
      iframeBtn.style.width = btnWidth + 'px'
      iframeBtn.style.height = btnWidth + 'px'
    }

    setBtnStyles()

    window.addEventListener('resize', setBtnStyles)
  }

})

</script>

<template>
    <PageMain :title="application.title">
        <section v-if="application" class="game">
}            <div class="game__description">
                {{ application.description }}
            </div>
            <div class="game__tags">
                <li v-for="tag in application.tags" :key="tag.id" class="game__tags-item">
                    <GameTag class="game__tag" :name="tag.name" />
                </li>
            </div>
            <div class="game__iframe">
                <button v-if="$device.isIos" class="game__iframe-fullscreen" :class="{'game__iframe__btn-full': isFullScreen}" @click="iosFullScreen"></button>
                <iframe class="game__application" :class="{'game__iframe-full': isFullScreen}" :src="`https://porngamestown.com${application.gamePath}`" allowfullscreen allow="autoplay; fullscreen" />
            </div>
            <footer class="game__footer">
                <div></div>
                <div class="game__rating">
                    <GameRating :path="application.path" :likes="application.likes" :liked="application.likedByUser"
                        :dislikes="application.dislikes" :disliked="application.dislikedByUser" />
                    <UIIcon class="game__views" name="eye" /> {{ application?.views }}
                </div>
            </footer>
        </section>
        <section class="similar-images" v-if="application?.images?.length > 0">
            <header class="similar-games__title">Images</header>
            <a :href="'https://porngamestown.com' + image" :key="key" data-fancybox="gallery" class="similar-images-link" v-for="(image, key) in application.images">
                <img :src="'https://porngamestown.com' + image" :alt="application.title">
            </a>
        </section>
        <UIButton class="game__problem" icon="problem" @click="dialogContact.open">Any problem? Contact us!</UIButton>
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

    &__iframe {
        position: relative;

        &-full {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 91;
            width: 100%;
            height: 100%;
        }

        &-fullscreen {
            background: transparent;
            border: none;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 92;
        }

        &__btn-full {
            position: fixed;
        }
    }

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
        width: 100%;
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

.similar-images {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    width: calc(100% + 1rem);
    gap: 1rem;
    &-link {
        display: flex;
        width: calc(25% - 1rem);
        img {
            width: 100%;
            object-fit: cover;
            height: 250px;
            border-radius: 4px;
        }

        @media(width < $desktop) {
            width: calc(50% - 1rem);
            img {
                height: 170px;
            }
        }
    }
}
</style>